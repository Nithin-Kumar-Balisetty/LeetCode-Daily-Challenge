/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    nums.sort((a,b)=>(a-b));
    nums[0] -= k;

    let max = nums[0], count = 1;

    for(let i=1;i<nums.length;i++){
        nums[i] = Math.min(Math.max(nums[i-1] + 1, nums[i]-k),nums[i]+k);
        if(nums[i] > max) max = nums[i];
        if(nums[i] > nums[i-1]) count++;
    }

    return count;
};


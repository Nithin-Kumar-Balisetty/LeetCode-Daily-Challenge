/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(k===1) return 0;

    nums.sort((a,b)=>(a-b));

    let ans = nums[k-1] - nums[0];
    for(let i=0;i<=(nums.length-k);i++){
        ans = Math.min(nums[i+k-1] - nums[i],ans);
    }

    return ans;
};

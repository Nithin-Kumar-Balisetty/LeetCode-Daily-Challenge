/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let op = 0, set = new Set();

    for(let i=0;i<nums.length;i++){
        if(nums[i] < k) return -1;
        if(nums[i] > k && !set.has(nums[i])){
            op++;
            set.add(nums[i]);
        }
    }  

    return op;
};

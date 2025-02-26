/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let sum = 0, max_sum = nums[0] , min_sum = nums[0];

    for(let i=0;i<nums.length;i++){
        if(sum < 0) sum = 0;
        sum += nums[i];

        max_sum = Math.max(max_sum, sum);
    } 

    sum = 0;
    for(let i=0;i<nums.length;i++){
        if(sum > 0) sum = 0;
        sum += nums[i];

        min_sum = Math.min(min_sum, sum);
    } 

    return Math.max(Math.abs(max_sum), Math.abs(min_sum));
};

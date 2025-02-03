/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let inc_count = 1, dec_count = 1;
    let max_inc = 1, max_dec = 1;

    for(let i=1;i<nums.length;i++){
        if(nums[i] > nums[i-1]){
            inc_count++;
            max_inc = Math.max(inc_count, max_inc);
        }
        else inc_count = 1;

        if(nums[i] < nums[i-1]){
            dec_count++;
            max_dec = Math.max(max_dec, dec_count);
        }
        else dec_count = 1;
    }

    return Math.max(max_inc, max_dec);
};

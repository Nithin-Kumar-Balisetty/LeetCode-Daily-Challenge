/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if(nums.length === 1) return true;

    for(let i=1;i<nums.length;i++){
        if(!( (nums[i-1]%2) ^ (nums[i]%2) )) return false;
    }

    return true;
};

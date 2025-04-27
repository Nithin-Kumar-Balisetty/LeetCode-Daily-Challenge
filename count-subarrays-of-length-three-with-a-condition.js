/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count = 0;

    for(let first = 0;first<nums.length-2;first++){
        if((2 * (nums[first]+nums[first+2])) == nums[first+1]) count++;
    }

    return count;
};

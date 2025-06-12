/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let diff = Math.abs(nums[0]-nums[1]);

    for(let i=1;i<nums.length-1;i++) diff = Math.max(diff,Math.abs(nums[i]-nums[i+1]));

    return Math.max(diff, Math.abs(nums[0]-nums[nums.length-1]));
};

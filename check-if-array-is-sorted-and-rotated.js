/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    
    let flag = true;
    for(let i=1;i<nums.length;i++){
        if(nums[i] < nums[i-1]) flag = false;
    }
    if(flag) return true;

    let smallest_index;
    for(let i=1;i<nums.length;i++){
        if(smallest_index && nums[i] < nums[i-1]) return false;
        if(nums[i] < nums[i-1]) smallest_index = i;
    }

    return (nums.at(-1) <= nums[0]);
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right = nums.length - 1, mid = left;

    while(mid <= right){
        if(nums[mid] === 0){
            [nums[mid],nums[left]] = [nums[left],nums[mid]];
            left++;
            mid++;
        }
        else if(nums[mid] === 1) mid++;
        else{
            [nums[mid],nums[right]] = [nums[right], nums[mid]];
            right--;
        }
    }

    return nums;
};

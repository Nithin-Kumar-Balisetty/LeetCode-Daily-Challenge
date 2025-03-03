/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let pivot_min = 0, pivot_max = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] > pivot) pivot_max++;
        else if(nums[i] < pivot) pivot_min++;
    }

    let ans = new Array(nums.length).fill(pivot), current =0, visited = 0;
    let left = 0, right = nums.length - pivot_max;

    while(visited < (pivot_max + pivot_min)){
        if(nums[current] !== pivot){
            if(nums[current] < pivot){
                ans[left] = nums[current];
                left++;
                visited++;
            }
            else if(nums[current] > pivot){
                ans[right] = nums[current];
                right++;
                visited++;
            }
        }
        current++;
    }

    return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let max_front = new Map(), max_back = new Map();
    let max1 = nums[0], max2 = nums[nums.length-1];;
    
    for(let i=1;i<nums.length;i++){
        max_front.set(i,max1);
        if(nums[i] > max1) max1 = nums[i];
        max_back.set(nums.length-1-i,max2);
        if(nums[nums.length-1-i] > max2) max2 = nums[nums.length-1-i];
    }
    
    let ans = 0;
    for(let i=1;i<nums.length-1;i++){
        let max_val = (max_front.get(i) - nums[i]) * max_back.get(i);
        if(max_val > ans) ans = max_val     
    }

    return ans;
};

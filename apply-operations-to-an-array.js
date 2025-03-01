/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    
    let zero_index = null, non_zero_index;
    for(let i=0;i<nums.length-1;i++){
        if(zero_index == null && nums[i] === 0) zero_index = i;
        if(nums[i] === nums[i+1]){
            nums[i] *=2 ;
            nums[i+1] = 0;
        }
    }  

    if(!zero_index && nums[0] != 0) return nums;

    non_zero_index = zero_index + 1;
    while(non_zero_index < nums.length && nums[non_zero_index] === 0)  non_zero_index++;

    if(non_zero_index === nums.length) return nums;

    while(true){
        [nums[zero_index], nums[non_zero_index]] = [nums[non_zero_index], 0];
        
        zero_index ++;
        while(zero_index < nums.length && nums[zero_index] !==0) zero_index++;
        if(zero_index === nums.length) break; 
        
        non_zero_index ++;
        while(non_zero_index < nums.length && nums[non_zero_index] === 0) non_zero_index++;
        if(non_zero_index === nums.length) break;
    }
    
    return nums;
};

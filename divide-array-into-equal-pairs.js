/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    
    let hm = new Map();
    for(let i=0;i<nums.length;i++){
        if(hm.has(nums[i])) hm.set(nums[i],hm.get(nums[i]) + 1);
        else hm.set(nums[i],1);
    }

    for(let i=0;i<nums.length;i++){
        if(hm.get(nums[i])%2) return false;
    }

    return true;   
};

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestSquareStreak = function(nums) {
    nums.sort((a,b)=>(a-b));
    
    let hm = new Map();
    let max = 0;

    for(let i=0;i<nums.length;i++){
        if(hm.has(Math.sqrt(nums[i])))
            hm.set(nums[i], hm.get(Math.sqrt(nums[i])) + 1);
        else hm.set(nums[i],1);
        max = Math.max(max, hm.get(nums[i]));
    }
    
    return (max > 1) ? max : -1;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let set = new Set(), count = 0;

    for(let i=nums.length-1;i>=0;i--){
        if(set.has(nums[i])){
            if((nums.length-count) % 3 === 0) return (nums.length-count)/3;
            else return Math.floor((nums.length-count)/3) + 1;
        }
        set.add(nums[i]);
        count++;
    }

    return 0;
};

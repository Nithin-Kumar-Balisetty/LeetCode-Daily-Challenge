/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    
    for(let i=0;i<nums.length;i=i+4){
       for(let j=i;j<(i+3);j++){
            for(let k=(j+1);k<(i+4);k++){
                if(nums[j] === nums[k]) return nums[j];
            }
       }
    }

    return null;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let start = 0, end = 1, maxLen = 1, usedBits = nums[0];

    while(start < (nums.length-1)){
        
        while(end < nums.length && ((nums[end] & usedBits) === 0)){
            usedBits = usedBits | nums[end];
            end++;
        }
        
        maxLen = Math.max(maxLen, end - start);
        if(end === nums.length) break;
        else{
            usedBits = usedBits ^ nums[start];
            start++;
            if(start === end){
                end++;
                usedBits = nums[start];
            }
        }

    }
    return maxLen;
};

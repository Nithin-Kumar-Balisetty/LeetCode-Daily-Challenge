/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let ans = [], xor = 0,max_k = Math.pow(2,maximumBit) - 1;
    
    for(let i=0;i<nums.length;i++){
        xor ^= nums[i];
        ans.push(xor ^ max_k);
    }

    for(let i=0;i<parseInt(ans.length / 2); i++){
        let temp = ans[i];
        ans[i] = ans[ans.length - 1 -i];
        ans[ans.length-1-i] = temp;
    }

    return ans;
};

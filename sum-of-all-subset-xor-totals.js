/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let sum = 0;

    let dfs = function(nums, i, xor){
        if(i >= nums.length) return ;

        sum += (xor ^ nums[i]);

        dfs(nums, i+1, xor);
        dfs(nums, i+1, xor ^ nums[i]);
    }

    dfs(nums, 0 , 0);
    return sum;
};

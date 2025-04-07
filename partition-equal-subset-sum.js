/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total_sum = 0;
    
    for(let i=0;i<nums.length;i++)
        total_sum += nums[i];

    let memo = Array(nums.length);
    for(let i=0;i<memo.length;i++)
        memo[i] = Array(total_sum+1).fill(-1);
    
    let helper = function(nums,index,sum){
        if(index >= nums.length) return false;
        
        if(memo[index][sum] !== -1) return memo[index][sum];
        if(sum === (total_sum/2) || (total_sum/2) === (sum + nums[index])) return true;
       
        memo[index][sum] = helper(nums,index+1,sum) 
                            || helper(nums,index+1,sum+nums[index])
        return memo[index][sum];
    }

    return helper(nums,0,0);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    let ans = Array(nums.length).fill(-1);

    for(let i=0;i<nums.length;i++){
        if(nums[i]%2){
            let count = 0;
            while(nums[i] % 2){
                nums[i] = nums[i] >> 1;
                count++;
            }
            count--;
            ans[i] = nums[i] << 1;
            while(count > 0){
                ans[i] = (ans[i] << 1) + 1;
                count--;
            }
        }
    }

    return ans;
};

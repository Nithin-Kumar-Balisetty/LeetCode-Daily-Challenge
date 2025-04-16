/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let count = 0, hm = new Map(), end = 0, ans = 0;
    
    for(let start=0;start<nums.length-1;start++){

        while(end < nums.length && count < k){
            if(hm.has(nums[end])) hm.set(nums[end],hm.get(nums[end])+1);
            else hm.set(nums[end],1);
            count += (hm.get(nums[end]) - 1);
            end++;
        }
        
        if(count >= k) ans += (nums.length-end+1);
        
        hm.set(nums[start],hm.get(nums[start])-1);
        count -= hm.get(nums[start]);
    }

    return ans;
};

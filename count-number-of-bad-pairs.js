/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let hm = new Map(), ans = 0;

    for(let i=0;i<nums.length;i++){
        if(hm.has(nums[i]-i)){
            ans += (i - hm.get(nums[i]-i));
            hm.set(nums[i]-i, hm.get(nums[i]-i) + 1);
        }
        else{
            ans += i;
            hm.set(nums[i]-i,1);
        }
    }

    return ans;
};

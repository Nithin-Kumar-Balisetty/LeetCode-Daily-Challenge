/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let hm = new Map(), keys = new Set();
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(!hm.has(nums[i]*nums[j])){
                keys.add(nums[i]*nums[j]);
                hm.set(nums[i]*nums[j],1);
            }
            else hm.set(nums[i]*nums[j], hm.get(nums[i]*nums[j]) + 1)
        }
    }

    let ans = 0;

    for(let key of keys)
        ans += (4*hm.get(key)*(hm.get(key) - 1));

    return ans;
};

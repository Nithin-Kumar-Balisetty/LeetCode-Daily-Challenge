/**
 * @param {number[]} nums
 * @return {number}
 */

var sumDigits = function(num){
    let digits = 0;
    while(num>0){
        digits += num%10;
        num = Math.floor(num/10);
    }
    return digits;
}

var maximumSum = function(nums) {
    let hm = new Map(), ans = -1;

    for(let i=0;i<nums.length;i++){
        let sum_digits = sumDigits(nums[i]);
        if(!hm.has(sum_digits)) hm.set(sum_digits,i);
        else{
            let prev = hm.get(sum_digits);
            ans = Math.max(ans, nums[prev] + nums[i]);
            if(nums[prev] < nums[i]) hm.set(sum_digits,i);
        }
    }

    return ans;
};

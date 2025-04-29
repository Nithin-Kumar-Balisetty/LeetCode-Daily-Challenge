/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max) max = nums[i];
    }

    let l=0,r=0,max_counter = 0,res=0;
    while(r<nums.length){
        if(nums[r] === max){
            if(max_counter===(k-1)){
                res += (nums.length-r);
                if(nums[l] === max){
                    max_counter--;
                }
                l++;
            }
            else{
                r++;
                max_counter++;
            }
        }
        else r++;
    }
    return res;
};

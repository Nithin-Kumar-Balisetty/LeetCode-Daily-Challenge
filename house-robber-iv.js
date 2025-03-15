/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {

    let start = Math.min(...nums), end = Math.max(...nums), capacity = start;

    while(start<=end){
        let mid = start + Math.floor((end-start)/2);
        let current_capacity = mid, count = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i] <= current_capacity){
                count++;
                i++;
            }
        }
        if(count >=k){
            capacity = current_capacity;
            end = mid-1;
        }
        else start = mid+1;
    }

    return capacity;
}; 

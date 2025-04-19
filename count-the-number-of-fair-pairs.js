/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a,b)=>(a-b));
    let count = 0;

    for(let start = 0;start<nums.length-1;start++){
        let small_index = null, large_index=null;
        let first = start+1, last = nums.length-1;
        while(first<=last){
            let mid = first + Math.floor((last-first)/2);
            if(nums[mid] < (lower-nums[start])) first= mid+1;
            else{
                small_index = mid;
                last = mid-1;
            }
        }
        first = start+1, last = nums.length-1;
        while(first <= last){
            let mid = first + Math.floor((last-first)/2);
            if(nums[mid] > (upper-nums[start]))  last = mid-1;
            else{
                large_index = mid;
                first = mid+1;
            }
        }
        if(small_index && large_index)
            count += (large_index - small_index + 1);
    }

    return count;
};

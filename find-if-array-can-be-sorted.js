/**
 * @param {number[]} nums
 * @return {boolean}
 */

let setbits = function(n){
    let count = 0;
    while(n > 0){
        if(n & 1) count++;
        n = n >> 1;
    }

    return count;
}

var canSortArray = function(nums) {
    nums.sort((a,b)=>{
        if(setbits(a) === setbits(b)) return a-b;
        else return 0;
    })
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] > nums[i+1]) return false; 
    }
    return true;
};

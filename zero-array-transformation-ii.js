/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    let start = 0, end = queries.length-1, ans = null;

    if(checkAllZeroes(nums,queries,-1)) return 0;

    while(start <= end){
        let mid = start + parseInt((end-start)/2);
        
        if(checkAllZeroes(nums,queries,mid)){
            ans = mid+1;
            end = mid-1;
        }
        else start = mid+1;
    }
    return ans ? ans : -1;
};

var checkAllZeroes = function(nums,queries,index){

    let diffarr = new Array(nums.length+1).fill(0);
    for(let i=0;i<=index;i++){
        diffarr[queries[i][0]] += queries[i][2];
        diffarr[queries[i][1]+1] -= queries[i][2];
    }

    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += diffarr[i];
        if(sum < nums[i]) return false;
    }

    return true;
}

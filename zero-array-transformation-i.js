/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    let arr = new Array(nums.length+1).fill(0);

    for(let item of queries){
        arr[item[0]] += 1;
        arr[item[1]+1] -= 1;
    }

    let prefix = 0;
    for(let i=0;i<arr.length;i++){
        arr[i] += prefix;
        prefix = arr[i];
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i] > arr[i]) return false;
    }

    return true;
};

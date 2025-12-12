/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    let answer = new Array(nums.length+1-k).fill(0);
    for(let i=0;i<answer.length;i++){
        let temp = [], hm = new Map();
        for(let j=i;j<nums.length && j<(i+k);j++){
            if(!hm.has(nums[j])) temp.push(nums[j]);
            hm.set(nums[j],(hm.get(nums[j]) || 0)+1);
        }
        temp.sort((a,b)=>{
            if(hm.get(a) === hm.get(b)) return b - a;
            else return hm.get(b) - hm.get(a);
        });
        for(let j=0;j<x&&j<temp.length;j++) 
            answer[i] += temp[j] * hm.get(temp[j]);
    }
    return answer;
};
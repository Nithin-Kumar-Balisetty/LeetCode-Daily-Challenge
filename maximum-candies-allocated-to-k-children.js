/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
 
    let start = 1, end = Math.max(...candies), ans = null;
    while(start<=end){
        let mid = start + Math.floor((end-start)/2), count = 0;
        for(let i=0;i<candies.length;i++) count += Math.floor(candies[i]/mid);
        if(count >= k){
            ans = mid;
            start = mid+1;
        }
        else end = mid-1;
    }
    
    return ans ? ans : 0; 
};


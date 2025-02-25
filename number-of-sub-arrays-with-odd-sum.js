/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let ans = 0, prefix_odds = 0, odds = 0, evens = 1;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2) prefix_odds++;

        if(prefix_odds%2) ans += evens;
        else ans += odds;
        
        if(prefix_odds%2) odds++;
        else evens++;
        
    }

    return ans % (Math.pow(10,9)+7);
};

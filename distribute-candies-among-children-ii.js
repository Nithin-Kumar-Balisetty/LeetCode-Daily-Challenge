/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let count = 0;

    for(let i=0;i<=Math.min(limit,n);i++){
        if((n-i) > (2*limit)) continue;
        
        let sec_min = Math.max(0,n-i-limit);
        let sec_max = Math.min(limit, n-i);

        count += (sec_max - sec_min) +1
    }

    return count;
};

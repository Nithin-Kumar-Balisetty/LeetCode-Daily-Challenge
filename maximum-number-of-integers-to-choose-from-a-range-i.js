/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let banned_m = new Map();
    for(let i=0;i<banned.length;i++)
        banned_m.set(banned[i],1);

    let max = 0, count =0;
    for(let i=1;i<=n;i++){
        if(!banned_m.has(i)){ 
            max += i;
            if(maxSum < max) return count;
            else if(maxSum === max) return count+1;
            count++;
        }
    }
    return count;
};

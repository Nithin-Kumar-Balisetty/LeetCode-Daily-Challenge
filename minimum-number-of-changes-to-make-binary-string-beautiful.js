/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let ans = 0;
    for(let i=0;i<=s.length-1;i=i+2){
        if(s[i] != s[i+1]) ans++;
    }
    return ans;
};

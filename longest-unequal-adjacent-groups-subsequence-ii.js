/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
    let dp = new Array(words.length).fill(1);
    let prev = new Array(words.length).fill(-1);
    let maxIndex = 0;

    for(let i=0;i<words.length;i++){
        for(let j=0;j<i;j++){
            if(groups[i] !== groups[j] && hamming_check(words[i],words[j]) 
                && (dp[i] < (dp[j] + 1))){
                dp[i] = dp[j]+1;
                prev[i] = j;
            }
        }
        if(dp[i] >= dp[maxIndex])
            maxIndex = i; 
    }

    let ans = [];

    for(let i=maxIndex;i>=0;i=prev[i])
        ans.push(words[i]);

    ans.reverse();
    return ans;

};

let hamming_check = function(a,b){
    if(a.length !== b.length) return false;
    
    let opp = 0;
    for(let i=0;i<a.length;i++){
        if(a[i] !== b[i]) opp++;
    }
    return (opp === 1);
}

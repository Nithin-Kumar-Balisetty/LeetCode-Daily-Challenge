/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var maxSum = function(i,j,s1,s2,memo){
    if(i >= s1.length || j >= s2.length) return 0;
    
    if(memo[i][j] != -1) return memo[i][j];

    let occur = [], counter = j;
    while(counter < s2.length){
        if(s2[counter] == s1[i]) occur.push(counter);
        counter++;
    }
    if(!occur.length) return maxSum(i+1,j,s1,s2,memo);

    let sum = maxSum(i+1,j,s1,s2,memo);

    for(let o of occur){
        let temp = (memo[i+1][o+1] != -1) ? memo[i+1][o+1] : 
                                    maxSum(i+1,o+1,s1,s2,memo);
        sum = Math.max(sum, s1.charCodeAt(i) + s2.charCodeAt(o) + temp);
    }

    memo[i][j] = sum;
    return sum;
}

var minimumDeleteSum = function(s1, s2) {
    let total = 0;

    for(let i=0;i<s1.length;i++) total += s1.charCodeAt(i);

    for(let i=0;i<s2.length;i++) total += s2.charCodeAt(i);

    let sum = 0, memo = [];
    
    for(let i=0;i<=s1.length;i++){
        let temp = [];
        for(let j=0;j<=s2.length;j++) temp.push(-1);
        memo.push(temp);
    }

    return total-maxSum(0,0,s1,s2,memo);
};


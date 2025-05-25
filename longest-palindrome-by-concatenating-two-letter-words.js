/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let arr = [], same_char = false;

    for(let i=0;i<26;i++)
        arr.push(new Array(26).fill(0));
    
    for(let word of words)
        arr[word.charCodeAt(0)-97][word.charCodeAt(1)-97]++;

    let ans = 0;

    for(let i=0;i<26;i++){
        for(let j=i;j<26;j++){
            if(j === i){
                ans += 2 * (Math.floor(arr[i][j]/2)*2);
                if(arr[i][j] % 2) same_char = true;
            }
            else ans += 4 * (Math.min(arr[i][j],arr[j][i]));
        }
    }

    return (same_char)? (2 + ans): ans;
};

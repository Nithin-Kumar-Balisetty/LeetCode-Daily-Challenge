/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    if(numFriends === 1) return word;
    
    let ans ='';

    for(let i=0;i<word.length;i++){
        let sub_str = word.substring(i,
                Math.min(i+word.length-numFriends+1,word.length));
        if(ans < sub_str) ans = sub_str;
    }

    return ans;
};

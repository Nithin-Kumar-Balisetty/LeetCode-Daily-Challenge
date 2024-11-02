/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let words = sentence.split(' ');
    if(words[0][0] !== words[words.length-1][words[words.length-1].length-1]) return false;

    for(let i=0;i<words.length-1;i++){
        if(words[i][words[i].length -1 ] != words[i+1][0]) return false;
    }

    return true;
};

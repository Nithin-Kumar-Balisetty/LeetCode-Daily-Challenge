/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.split(' ');
    for(let i=0;i<words.length;i++){
        if(searchWord.length > words[i].length) continue;
        else{
            if(searchWord.length === words[i].length){
                if(searchWord === words[i]) return (i+1);
                else continue;
            } 
            let flag = false;
            for(let j=0;j<searchWord.length;j++){
                if(searchWord[j] !== words[i][j]){
                    flag = true;
                    break;
                }
            }
            if(flag) continue;
            else return (i+1);
        }
    }
    return -1;
};

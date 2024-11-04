/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let str = '';
    for(let i=0;i<word.length;i++){
        let count =0;
        while(count < 9 && (count + i) < word.length && word[i] === word[i + count]) count++;
        str += (count.toString() + word[i]);
        i = i + count - 1;
    }

    return str;
};

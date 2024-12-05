/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let hm = new Map();
    let start = 0, i;
    for(i=0;i<str2.length;i++){
        let j, found=false;
        for(j=start;j<str1.length;j++){
            if(( ((str2.charCodeAt(i) - str1.charCodeAt(j)) % 26) <= 1  &&
                ((str2.charCodeAt(i) - str1.charCodeAt(j)) % 26) >= 0 ) ||
                 (str2[i] == 'a' && str1[j] == 'z') ){
                found = true;
                start = j + 1;
                break;
            }
        }
        if(j === str1.length){
            if(i < (str2.length-1)) return false;
            return found;
        }
    }

    return true;
};

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let ans = 0;

    for(let i=0;i<words.length;i++){
        let s1 = 0 , s2 = 0;
        if(words[i].length < pref) continue;
        else if(words[i] === pref) ans++;
        else{
            while(s1 < pref.length){
                if(words[i][s2] !== pref[s1]) break;
                s1++;
                s2++;
            }

            if(s1 === pref.length) ans++;
        } 
    }

    return ans;
};

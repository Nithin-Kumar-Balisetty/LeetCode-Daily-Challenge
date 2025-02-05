/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1.length !== s2.length) return false;
    if(s1 === s2) return true;
    
    let non_matching = 0, flag = false, s1_char = null, s2_char = null;
    for(let i=0;i<s1.length;i++){
        if(s1[i] !== s2[i]) non_matching++;
        
        if(non_matching === 1 && !flag){
            s1_char = s1[i];
            s2_char = s2[i];
            flag = true;
        }
        
        if(non_matching === 2 && flag){
            if(s2_char !== s1[i] || s1_char !== s2[i]) return false;
            flag = false;
        }

        if(non_matching > 2) return false;
    }

    return (non_matching === 2);
};

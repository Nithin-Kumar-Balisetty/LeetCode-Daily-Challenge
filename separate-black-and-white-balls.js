/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let left = 0, count = 0;

    for(let i=0;i<s.length;i++){
        if(s[i] === '0'){
             count += (i-left);
             left++;
        }
    }

    return count;
};

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let res = '';
    for(let i=0;i<s.length;i++){
        let counter = 1;
        while( (i + counter) < s.length && s[i+counter] === s[i]) counter++;
        for(let j=0;j<Math.min(2,counter);j++) res+= s[i];
        i += (counter-1);
    }

    return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let i = 0, count = 0;
    while(i<s.length){
        while(i < s.length && s[i] === '0') i++;
        if(i >= s.length) break;

        let consec_ones = 0;
        while(i < s.length && s[i] === '1'){
            consec_ones++;
            i++;
        }

        count +=  (consec_ones * (consec_ones + 1) /2);
    }

    return count % (7 + Math.pow(10,9));
};
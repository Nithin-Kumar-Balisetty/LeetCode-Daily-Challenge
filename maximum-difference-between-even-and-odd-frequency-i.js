/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let charFreq = new Array(26).fill(0);

    for(let i=0;i<s.length;i++)
        charFreq[s.charCodeAt(i)-97]++;
    
    let min_even = 2 * Math.floor(s.length/2), max_odd = 1;

    for(let i=0;i<26;i++){
        if(charFreq[i]%2)
            max_odd = Math.max(max_odd, charFreq[i])
        else if(charFreq[i] !== 0)
            min_even = Math.min(min_even, charFreq[i]);
    }
    
    return max_odd - min_even;
};

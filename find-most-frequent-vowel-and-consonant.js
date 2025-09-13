/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let char_freq = new Array(26).fill(0);

    for(let i=0;i<s.length;i++){
        char_freq[s.charCodeAt(i)-97]++;
    }

    let m1 = 0, m2 = 0;
    for(let i=0;i<26;i++){
        if(i === 0 || i === 4 || i == 8 || i === 14 || i === 20)
            m1 = Math.max(m1, char_freq[i]);
        else m2 = Math.max(m2, char_freq[i]);
    }

    return m1 + m2;
};

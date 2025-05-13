/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    let hm = new Array(2), mod = Math.pow(10,9) + 7;
    
    hm[0] = new Array(26).fill(0);
    hm[1] = new Array(26).fill(0);

    for(let i=0;i<s.length;i++)
        hm[0][s.charCodeAt(i)-97]++;

    for(let i=0;i<t;i++){
        hm[1][0] = hm[0][25];
        hm[1][1] = (hm[0][25] + hm[0][0]) % mod;
        for(let j=2;j<26;j++)
            hm[1][j] = hm[0][j-1];

        for(let j=0;j<26;j++)
            hm[0][j] = hm[1][j];
    }

    let sum = 0;
    for(let item of hm[1]) sum = (sum + item) % mod;

    return sum;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    
    if(k > s.length) return false;
    if(k === s.length) return true;

    let hm = new Map(), odds = 0;

    for(let i=0;i<s.length;i++){
        if(hm.has(s[i])) hm.set(s[i],hm.get(s[i]) + 1);
        else hm.set(s[i],1);
    }

    for(let i=97;i<=122;i++){
        if(hm.has(String.fromCharCode(i)) && (hm.get(String.fromCharCode(i)) % 2 )) odds++;
    }

    return (odds<=k);

};

/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    let t = [], suffix_min = new Array(s.length+1).fill(s.length-1);
    let p = '', first = 0;

    for(let i=s.length-2;i>=0;i--){
        if(s[i] < s[suffix_min[i+1]]) suffix_min[i] = i;
        else suffix_min[i] = suffix_min[i+1];
    }

    while(first < s.length){
        t.push(s[first]);
        
        while(t.length && t[t.length - 1] <= s[suffix_min[first+1]])
            p += t.pop();

        first++;
    }

    while(t.length) p += t.pop();

    return p;
};

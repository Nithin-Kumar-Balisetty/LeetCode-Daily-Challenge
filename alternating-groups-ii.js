/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let start = 0, end= k-1, len = colors.length, ans = 0, hm = new Map();
    hm.set(0,1); 

    for(let i=0;i<len;i++) colors.push(colors[i]);

    for(let i=1;i<colors.length;i++){
        if(colors[i] === colors[i-1]) hm.set(i,1);
        else hm.set(i, hm.get(i-1)+1);
    }

    for(start = 0;start < len; start++,end++){
        if(hm.get(end) >=k) ans++;
    }

    return ans;
};

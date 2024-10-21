/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    return backtrack(s,0,new Set());
};

let backtrack = function(s,start,hm){
    if(start === s.length)
        return hm.size;

    let substr = '', max = 0;
    for(let i=start;i<s.length;i++){
        substr += s[i];
        if(!hm.has(substr)){
            hm.add(substr);
            max = Math.max(backtrack(s,i+1,hm),max);
            hm.delete(substr);
        }
    }
    
    return max;
}

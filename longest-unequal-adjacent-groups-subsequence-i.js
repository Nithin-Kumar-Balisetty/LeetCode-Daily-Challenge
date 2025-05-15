/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let res = [];

    for(let i=0;i<groups.length;i++){
        let start = i,count = 1;
        
        while(start < (groups.length -1) && groups[start] === groups[start+1])
            start++;
        
        res.push(words[i]);
        i = start;
    }

    return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let chars = [], count = 0;
    
    for(let i=0;i<26;i++) chars.push([]);

    for(let i=0;i<s.length;i++){
        if(chars[s.charCodeAt(i)-97].length == 2) chars[s.charCodeAt(i)-97].shift();
        else chars[s.charCodeAt(i)-97].push(i);
    }

    for(let i=0;i<26;i++)
        count += chars[i].length;

    return count;
};

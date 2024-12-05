/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let res = [''];
    for(let i=0;i<spaces[0];i++)
        res[0] += s[i];
    for(let i=0;i<spaces.length;i++){
        let str = '', flag;
        if(i === spaces.length) flag = true;
        else flag = false;
        for(let j=spaces[i];j<s.length;j++){
            if(j === s.length) break;
            if(!flag && j === spaces[i+1]) break;
            str += s[j];
        }
        res.push(str);
    }
    return res.join(' ')
};

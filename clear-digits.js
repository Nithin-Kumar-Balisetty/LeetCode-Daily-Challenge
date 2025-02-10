/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];

    for(let i=0;i<s.length;i++){
        if(stack.length){
            let top = stack[stack.length-1];
            if(s.charCodeAt(i) >= 48 && s.charCodeAt(i)<=57) stack.pop();
            else stack.push(s[i]);
        }
        else stack.push(s[i]);
    }

    let ans = '';
    for(let i=0;i<stack.length;i++) ans += stack[i];

    return ans;
};

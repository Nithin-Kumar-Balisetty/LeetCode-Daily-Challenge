/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let a = 0, b = 0,c = 0;
    let start = 0, start_char = s[0], end = 0, ans =0;

    while(end<s.length && start <= end){
    
        if(s[end] === 'a') a++;
        else if(s[end] === 'b') b++;
        else c++;
        
        while(a && b && c){
            ans +=(s.length - end);
            
            if(start_char === 'a') a--;
            else if(start_char === 'b') b--;
            else c--;
            
            start_char = s[++start];
        }
        
        end++;
    }
    return ans;
};

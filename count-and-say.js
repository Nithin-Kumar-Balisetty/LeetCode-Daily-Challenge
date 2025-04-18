/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1) return '1';
    else if(n === 2) return '11';
    else if(n === 3) return '21';

    let str = '21', k = 1, ans = '';

    while(k <= (n-3)){
        ans = '';
        for(let i=0;i<str.length;i++){
            let start = str[i], count = 1;
            while((i+1) < str.length && str[i+1] === start){
                count++;
                i++;
            }
            ans += (count.toString()+start); 
        }
        str = ans;
        k++;
    }

    return ans;
};

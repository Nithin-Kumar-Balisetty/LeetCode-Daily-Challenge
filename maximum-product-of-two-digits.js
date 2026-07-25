/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let max = Math.max(n%10, parseInt(n/10)%10);
    let s_max = Math.min(n%10, parseInt(n/10)%10);

    n = parseInt(n/100);
    while(n>0){
        let digit = n % 10;
        if(digit >= max){
            s_max = max;
            max = digit;
        }
        else if(s_max<=digit && max>digit) s_max = digit;
        n = parseInt(n/10);
    }

    return max * s_max;
};

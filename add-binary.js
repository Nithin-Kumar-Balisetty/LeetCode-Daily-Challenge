/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length < b.length) return addBinary(b,a);
    let ans = '', carry = 0;
    for(let i=0;i<b.length;i++){
        let char_a = parseInt(a.charAt(a.length-1-i));
        let char_b = parseInt(b.charAt(b.length-1-i));

        let sum = char_a ^ char_b ^ carry;

        if(sum){
            if((char_a ^char_b) || (char_a == 0 && char_b ==0)) carry = 0;
            else carry = 1;
        }
        else{
            if(char_a == 0 && char_b == 0) carry = 0;
            else carry = 1;
        }
        ans = sum.toString() + ans;
    }

    let counter = a.length - 1 - b.length;
    while(counter>=0){
        let sum = parseInt(a.charAt(counter--)) ^ carry;
        if(sum) carry = 0;
        ans = sum.toString() + ans;
    }

    return (carry) ? "1"+ ans : ans;
};

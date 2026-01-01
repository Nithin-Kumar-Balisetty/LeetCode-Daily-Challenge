/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;

    for(let i=digits.length-1;i >= 0;i--){
        if((digits[i] + carry) > 9){
            digits[i] = 0;
            carry = 1;
        }
        else{
            digits[i] += carry;
            carry = 0;
            break;
        }
    }

    if (carry) digits.unshift(1);
    
    return digits;
};

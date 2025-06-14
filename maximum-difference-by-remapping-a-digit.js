/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let digits = [], n = num;

    while(n > 0){
        digits.push(n%10);
        n = Math.floor(n/10);
    }

    digits.reverse();

    let max = 0, min = 0, counter = -1;

    while(counter < digits.length && digits[++counter] === 9);

    if(counter === digits.length) max = num;
    else{
        let digit = digits[counter];
        for(let i=0;i<digits.length;i++){
            if(digits[i] === digit) max = (10*max + 9);
            else max = (10*max + digits[i]);
        }
    }

    counter = -1;

    while(counter < digits.length && digits[++counter] === 0);
    
    if(counter === digits.length) min = num;
    else{
        let digit = digits[counter];
        for(let i=0;i<digits.length;i++){
            if(digits[i] === digit) min = (10*min + 0);
            else min = (10*min + digits[i]);
        }
    }

    return max - min;
};

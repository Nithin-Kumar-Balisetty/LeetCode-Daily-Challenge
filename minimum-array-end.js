/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let num, bits = [], x_bits = [];
    num = n-1;
    while(num > 0){
        bits.push(num & 1);
        num = num >> 1;
    }

    num = x;
    while(num > 0){
        x_bits.push(num & 1);
        num = num >> 1;
    }

    let start = 0;

    for(let i=0;i<x_bits.length && start < bits.length;i++){
        if(x_bits[i] === 0){
            x_bits[i] = bits[start];
            start++;
        }
    }

    while(start < bits.length){
        x_bits.push(bits[start]);
        start++;
    }
     

    let ans = 0;
    
    for(let i=0;i<x_bits.length;i++) ans += Math.pow(2,i) * x_bits[i];

    return ans;
    
};

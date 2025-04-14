/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    if(n === 1) return 5;

    let mod = BigInt(7 + Math.pow(10,9));
   
    return Number(exp(5,BigInt(Math.floor((n+1)/2)),mod) * exp(4,BigInt(Math.floor(n/2)), mod) % mod);
}

let exp = function(x, y, mod){
    let res = 1n, mul = BigInt(x);
    y = BigInt(y);
    
    while(y > 0){
        if(y % 2n == 1n) res = res * mul % mod; 
        mul = mul * mul % mod;
        y = y / 2n;
    }

    return res;
}

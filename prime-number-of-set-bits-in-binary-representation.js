/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

var isPrime = function(num){
    if(num === 1) return false;
    if(num <= 3) return true;
    
    for(let i=2;i<=parseInt(Math.pow(num,0.5));i++){
        if(num % i === 0) return false;
    }

    return true;
}

var countSetBits = function(num){
    let count = 0;

    while(num > 0){
        if(num % 2) count++;
        num = parseInt(num/2);
    }   

    return count; 
}

var countPrimeSetBits = function(left, right) {
    let count = 0;

    for(let i=left;i<=right;i++){
        if(isPrime(countSetBits(i)))  count++;
    }

    return count;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var computeAllPrimes = function(n){
    let arr = new Array(n+1).fill(true);
    arr[0] = false;
    arr[1] = false;

    for(let i=2;i<=n;i++){
        if(arr[i]){
            for(let j = i*2;j<=n;j+=i) arr[j] = false;
        }
    }

    return arr;
}

var closestPrimes = function(left, right) {
    let numbers = computeAllPrimes(right);
    
    let num1 = -1, num2 = -1, previous_prime = null, diff = null;
    for(let i=left;i<=right;i++){
        if(numbers[i]){
            if(!previous_prime) previous_prime = i;
            else{
                if(!diff || (diff > (i - previous_prime))){
                    diff = i - previous_prime;
                    num1 = previous_prime;
                    num2 = i;
                    previous_prime = i;
                }
                else previous_prime = i;
                
            }
        }
    }

    return [num1,num2];
};

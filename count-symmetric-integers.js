/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    for(let i=low;i<=high;i++){
        if(checkSymmetric(i)) count++;
    }
    return count++;
};

var checkSymmetric = function(number){
    let digits = 0, n = number;
    while(n){
        n = Math.floor(n/10);
        digits++;
    }

    if(digits%2) return false;
    n = number, d = 0;
    let left_sum = 0, total_sum = 0;
    while(n){
        total_sum += (n - 10*Math.floor(n/10));
        if(d < (digits/2)){
            left_sum += (n - 10*Math.floor(n/10));
        }
        d++;
        n = Math.floor(n/10);
    }
    
    return (total_sum === (2*left_sum));
}   

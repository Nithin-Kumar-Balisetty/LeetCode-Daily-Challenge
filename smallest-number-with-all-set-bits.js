/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let count = 0;
    
    while(n > 0){
        count++;
        n = Math.floor(n/2);
    }

    return Math.pow(2,count)-1;
};
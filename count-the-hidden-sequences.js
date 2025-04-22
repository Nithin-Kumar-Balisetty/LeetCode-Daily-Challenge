/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let min = 0, max = 0, diff = 0;
    
    for(let item of differences){
        diff += item;
        min = Math.min(diff, min);
        max = Math.max(diff, max);
        if((max - min) > (upper-lower)) return 0;
    }

    return upper-lower+min-max+1;
};

/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let max = candidates[0];
    for(let i=1;i<candidates.length;i++){
        if(max < candidates[i]) max = candidates[i];
    }
    let max_bits = 0 , temp = max;

    while(temp > 0){
        temp = temp >> 1;
        max_bits++;
    }

    let arr = Array(max_bits).fill(0);
    let ans = 0, counter = 0;
    for(let i=0;i<max_bits;i++,counter++){
        let num = Math.pow(2,counter), temp = 0;
        for(let j=0;j<candidates.length;j++){
            if((candidates[j] & num) === num) temp++;
        }
        if(temp > ans) ans = temp;
    }

    return ans;

};

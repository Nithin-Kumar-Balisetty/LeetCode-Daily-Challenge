/**
 * @param {number[]} power
 * @return {number}
 */

var helper = function(index,power,memo){
    if(index >= power.length) return 0;
    if(index === (power.length-1)) return power[power.length-1];
    
    if(memo.has(index)) return memo.get(index);

    let next_index = index, zeroes = 0, ones = 0, twos = 0;
    
    while(next_index < power.length && power[next_index] <= (power[index]+2)){
        if(power[next_index] === power[index]) zeroes++;
        else if(power[next_index]-1 === power[index]) ones++;
        else twos++;
        next_index++;
    }
    
    let next_one_index = next_index, next_two_index = next_index;

    while(next_one_index < power.length && power[next_one_index] <= (power[index]+3)) next_one_index++;

    while(next_two_index < power.length && power[next_two_index] <= (power[index]+4)) next_two_index++;

    let ans = Math.max(zeroes*power[index] + helper(next_index, power,memo), 
            ones*(power[index]+1) + helper(next_one_index, power,memo),
            twos*(power[index]+2) + helper(next_two_index,power,memo));

    memo.set(index, ans);
    return ans;
}


var maximumTotalDamage = function(power) {
    return helper(0,power.sort((a,b)=>(a-b)),new Map());
};

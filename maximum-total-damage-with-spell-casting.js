/**
 * @param {number[]} power
 * @return {number}
 */



var maximumTotalDamage = function(power) {
    let power_freq = new Map();
    
    for(let i=0;i<power.length;i++)
        power_freq.set(power[i],(power_freq.get(power[i]) || 0) + 1);

    let previous_max = -1;

    let power_set = Array.from(power_freq.keys()).sort((a,b)=>(a-b));
    dp = Array(power_set.length).fill(0);
    
    dp[0] = power_freq.get(power_set[0]) * power_set[0];

    for(let i=1;i<power_set.length;i++){
        use_power = power_set[i] * power_freq.get(power_set[i]);
        
        while((previous_max + 1) < i && power_set[previous_max+1]<(power_set[i]-2)){
            previous_max++;
        }

        if(previous_max !== -1) use_power += dp[previous_max];
        
        not_use_power = dp[i-1];

        dp[i] = Math.max(use_power, not_use_power);
    }

    return dp[power_set.length-1];
};

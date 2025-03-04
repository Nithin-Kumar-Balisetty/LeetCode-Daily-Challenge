/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let max_power = Math.log(n) / Math.log(3);

    if(max_power === parseInt(max_power)) return true;
    max_power = parseInt(max_power);

    return helper(n,max_power);
};

var helper = function(n,power){
    if(power === 0){
        if(n===1) return true;
        else return false;
    }

    if(power === 1){
        if(n === 3 || n === 1 || n === 4) return true;
        else return false;
    }

    if(Math.pow(3,power) === n) return true;
    if(Math.pow(3,power+1)<=n) return false;

    let flag = false;

    for(let i = power-1;i >=0;i--)
        flag |= helper(n-Math.pow(3,power),i);

    return flag | helper(n, power-1);
}

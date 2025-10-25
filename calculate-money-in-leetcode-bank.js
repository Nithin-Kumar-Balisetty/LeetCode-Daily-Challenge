/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {    
    let total_weeks = Math.floor(n/7);
    let rem_days = n % 7;

    return 28*total_weeks + 7*((total_weeks-1)*total_weeks/2)
            + rem_days*(rem_days+1)/2 + rem_days*total_weeks;
};
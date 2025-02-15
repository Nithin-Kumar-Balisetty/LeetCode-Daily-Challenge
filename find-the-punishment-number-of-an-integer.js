/**
 * @param {number} n
 * @return {number}
 */

var check_partition = function(num, sum){
    
    if(sum < 0) return false;
    if(num === 0 && sum > 0) return false;

    if(num === sum) return true;
    if(num > 0 && sum === 0) return false;
    if(num === 0 && sum === 0)  return true;
    if(num === 0) return false;

    let ans = false, cur_sum = 0, counter = 0, n = num;

    while(n > 0){
        cur_sum = Math.pow(10, counter)*(n%10) + cur_sum;
        counter++;

        ans |= check_partition(parseInt(n/10),sum - cur_sum);
        n = parseInt(n/10);
    }

    return ans;
}

var punishmentNumber = function(n) {
    let sum = 0;

    for(let i=1;i<=n;i++){
        if(check_partition(i*i,i)) sum += i*i;
    } 

    return sum;
};

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let max = 0, count = 0, hm = new Map();

    for(let i=1;i<=n;i++){
        let sum = 0, num = i;
        while(num > 0){
            sum += (num%10);
            num = Math.floor(num/10);
        }

        if(hm.has(sum)) hm.set(sum,hm.get(sum)+1);
        else hm.set(sum,1);

        if(hm.get(sum) === max) count++;
        else if(hm.get(sum) > max){
            max = hm.get(sum);
            count = 1;
        }
    }

    return count;
};

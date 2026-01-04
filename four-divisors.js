/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let sum = 0;

    for(let j=0;j<nums.length;j++){
        let count = 0, div = 1, num = nums[j];
        for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
            if(num % i === 0){
                if(count === 0) div = i;
                count++;
            }
        }
        if(count === 1){
            if(div !== (num/div)) sum += (1 + num + div + num/div);
        }
    }

    return sum;
};

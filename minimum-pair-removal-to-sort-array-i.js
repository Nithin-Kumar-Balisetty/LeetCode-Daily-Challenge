/**
 * @param {number[]} nums
 * @return {number}
 */

var check = function(nums){
    let res= true, sum = Number.MAX_SAFE_INTEGER, min = [-1,-1];
    for(let i=0;i<(nums.length-1);i++){
       while(i < nums.length && nums[i] === 1001) i++;
       if(i >= nums.length) break;

       let first = i;
       i++;

       while(i < nums.length && nums[i] === 1001) i++;
       if(i >= nums.length) break;

       let sec = i;

       if(nums[first]>nums[sec]) res = false;
       i--;
       
       if(sum > (nums[first]+nums[sec])){
          sum = nums[first] + nums[sec];
          min = [first, sec];
       }
    }
    
    return [res, min];
}

var minimumPairRemoval = function(nums) {
    let ans = 0;

    while(ans < nums.length){
        let c = check(nums);
        if(c[0]) break;
        nums[c[1][0]] += nums[c[1][1]];
        nums[c[1][1]] = 1001;
        ans++;
    }

    return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a,b)=>(a-b));

    let memo = new Map();
    memo.set(nums.length,null);
    memo.set(nums.length-1,[nums[nums.length-1]]);

    let helper = function(nums,index){
        if(memo.has(index)) return memo.get(index);

        let start = nums[index], max = 1, ans = [nums[index]];
        for(let i=index+1;i<nums.length;i++){
            if((nums[i] % start) === 0){
                let temp = helper(nums,i);
                if(max < (1 + temp.length)){
                    max = 1 + temp.length;
                    ans = [nums[index],...temp];
                }
            }
        }
        
        memo.set(index,ans);
        return ans;
    }

    let max = 1, ans = [nums[0]];
    for(let i=0;i<nums.length;i++){
        if(memo.has(i)){
            if(memo.get(i).length > max){
                max = memo.get(i).length;
                ans = memo.get(i);
            }
        }
        else{
            if(helper(nums,i).length > max){
                max = helper(nums,i).length;
                ans = helper(nums,i);
            }
        }
    }

    return ans;
};

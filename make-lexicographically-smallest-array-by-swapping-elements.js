/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */

var lexicographicallySmallestArray = function(nums, limit) {
    let temp = [...nums], groups = [], group = [], group_indexes = new Map();

    temp.sort((a,b)=>(a-b));

    for(let i=0;i<temp.length;i++){
        if(!group.length) group.push(temp[i]);
        else{
            if((temp[i] - group[group.length -1]) <= limit) group.push(temp[i]);
            else{
                groups.push(group);
                group = [];
                i--;
            }
        }
    }

    if(group.length) groups.push(group);
    
    for(let i=0;i<groups.length;i++){
        for(let j=0;j<groups[i].length;j++) group_indexes.set(groups[i][j],i);
    }

    for(let i=0;i<nums.length;i++)
        nums[i] = groups[group_indexes.get(nums[i])].shift();
    

    return nums;
};

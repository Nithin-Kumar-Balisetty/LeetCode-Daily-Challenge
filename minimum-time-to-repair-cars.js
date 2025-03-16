/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let start = 1, end = Math.max(...ranks) * cars * cars;
    let ans = end;
    
    while(start <= end){
        let mid = Math.floor((end+start)/2), cleaned = 0;
        
        for(let rank of ranks) cleaned += Math.floor(Math.sqrt(mid/rank))
        
        if(cleaned >= cars){
            ans = mid;
            end = mid-1;
        }
        else start = mid+1;
    }

    return ans;
};

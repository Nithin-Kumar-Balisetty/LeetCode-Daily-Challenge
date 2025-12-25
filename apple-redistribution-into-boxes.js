/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    capacity.sort((a,b)=>(b-a));
    let sum = 0, ans = 0;

    for(let i=0;i<apple.length;i++) sum+=apple[i];

    for(let i=0;i<capacity.length;i++){
        sum -= capacity[i];
        ans++;
        if(sum<=0) return ans;
    }

    return ans;
};

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a,b)=>(b-a));

    let track = 0, ans = 0;

    for(let i=0;i<k;i++){
        ans += Math.max(happiness[i]-track,0)
        track++;
    }

    return ans;
};

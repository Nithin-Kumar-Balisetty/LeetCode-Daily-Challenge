/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) {
    let left = new Array(n).fill(-1) , right = new Array(n).fill(-1);
    let top = new Array(n).fill(-1), bottom = new Array(n).fill(-1);
    let ans = 0;

    for(let building of buildings){
        if(left[building[0]-1] === -1) left[building[0]-1] = building[1]-1;
        else left[building[0]-1] = Math.min(building[1]-1, left[building[0]-1]);

        if(right[building[0]-1] === -1) right[building[0]-1] = building[1]-1;
        else right[building[0]-1] = Math.max(building[1]-1, right[building[0]-1]);

        if(top[building[1]-1] === -1) top[building[1]-1] = building[0]-1;
        else top[building[1]-1] = Math.min(building[0]-1, top[building[1]-1]);

        if(bottom[building[1]-1] === -1) bottom[building[1]-1] = building[0]-1;
        else bottom[building[1]-1] = Math.max(building[0]-1, bottom[building[1]-1]);
    }

    for(let building of buildings){
        if(left[building[0]-1] < (building[1] - 1) && right[building[0]-1] > (building[1]-1)
            && top[building[1]-1] < (building[0]-1) && bottom[building[1]-1] > (building[0]-1)) 
            ans++;
    }

    return ans;
};

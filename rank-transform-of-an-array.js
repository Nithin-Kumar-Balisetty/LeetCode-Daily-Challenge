/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let new_arr = [...arr];
    new_arr.sort((a,b)=>(a-b));
    let hm = new Map(), rank = 1;
    for(let i=0;i<new_arr.length;i++){
        if(hm.has(new_arr[i])) continue;
        else hm.set(new_arr[i],rank);
        rank++;
    }
    for(let i=0;i<arr.length;i++)
        arr[i] = hm.get(arr[i]);
    
    return arr;
};
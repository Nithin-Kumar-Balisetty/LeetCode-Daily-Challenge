/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let hm = new Map();

    for(let i=0;i<arr.length;i++){
        if(hm.has(2 * arr[i]) || hm.has(arr[i] /2)) return true;
        hm.set(arr[i],true);
    }

    return false;
};

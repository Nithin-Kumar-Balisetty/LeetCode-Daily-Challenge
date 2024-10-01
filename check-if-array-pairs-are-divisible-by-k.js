/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    let hm = new Map();
    let set = [];
    
    for(let i=0;i<arr.length;i++){
        let rem = (arr[i] % k + k) % k;
        if(hm.has(rem)) hm.set(rem,hm.get(rem) + 1);
        else{
            set.push(rem);
            hm.set(rem,1);
        }
    }

    for(let i=0;i<set.length;i++){
        if(!hm.get(set[i])) continue;
        if(set[i] === 0){
            if (hm.get(set[i]) % 2) return false;
            else continue;
        }
        if(hm.has(k-set[i]) && hm.get(set[i]) === hm.get(k-set[i])){
            hm.set(k-set[i],0);
            hm.set(set[i],0);
        }
        else return false;
    }
    return true;

};
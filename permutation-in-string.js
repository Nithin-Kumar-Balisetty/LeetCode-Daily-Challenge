/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let count, hm = new Map();
    for(let i=0;i<s1.length;i++){
        if(hm.has(s1[i])) hm.set(s1[i],hm.get(s1[i])+1);
        else hm.set(s1[i],1);
    }

    let counter = 0;
    while(counter < s2.length){
        while(counter < s2.length && !hm.has(s2[counter])) counter++;
        let start = counter;
        let map = new Map(hm);
        count  = s1.length;
        while(counter<s2.length && count > 0){
            if(!map.has(s2[counter])) break;
            if(map.get(s2[counter]) === 0) break;
            map.set(s2[counter], map.get(s2[counter])-1);
            count--;
            counter++;
        }
        if(count === 0) return true;
        
        if(map.has(s2[counter])) counter=start+1;
        else counter++;
    }

    return false;
};

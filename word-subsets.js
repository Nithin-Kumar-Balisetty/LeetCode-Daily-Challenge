/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */

var wordSubsets = function(words1, words2) {
    
    let ans = [];

    let total_map = new Map(), total_set = [];

    for(let i=0;i<words2.length;i++){
        let hm = new Map();

        for(let j=0;j<words2[i].length;j++){
            if(hm.has(words2[i][j])) hm.set(words2[i][j] , hm.get(words2[i][j]) + 1);
            else hm.set(words2[i][j] , 1);

            if(!total_map.has(words2[i][j])){
                total_map.set(words2[i][j], 1);
                total_set.push(words2[i][j]);
            }
            else if(total_map.get(words2[i][j]) < hm.get(words2[i][j]))
                total_map.set(words2[i][j], hm.get(words2[i][j]));
        }
    }

    for(let i=0;i<words1.length;i++){
        let hm = new Map();

        for(let j=0;j<words1[i].length;j++){
            if(hm.has(words1[i][j])) hm.set(words1[i][j], hm.get(words1[i][j]) + 1);
            else hm.set(words1[i][j] , 1);
        }

        let flag = false;

        for(let j=0;j<total_set.length;j++){
            if(!hm.has(total_set[j]) || (total_map.get(total_set[j]) > hm.get(total_set[j]) ) ){
                flag = true;
                break;
            }
        }

        if(!flag) ans.push(words1[i]);
    }

    return ans;
};

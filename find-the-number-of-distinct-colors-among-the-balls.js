/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let hm = new Map(), colors = new Map();
    let ans = [];
    for(let i=0;i<queries.length;i++){
        if(!colors.has(queries[i][1])) colors.set(queries[i][1],new Set([queries[i][0]]));
        else colors.get(queries[i][1]).add(queries[i][0]);

        if(hm.has(queries[i][0]) && hm.get(queries[i][0]) !== queries[i][1]){
            colors.get(hm.get(queries[i][0])).delete(queries[i][0]);
            if(colors.get(hm.get(queries[i][0])).size === 0) colors.delete(hm.get(queries[i][0]));
        }
        
        hm.set(queries[i][0], queries[i][1]);
        ans.push(colors.size);
    }

    return ans;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prereq, queries) {
    let adj = [], visited = new Map();

    for(let i=0;i<numCourses;i++) adj.push([]);
    for(let i=0;i<prereq.length;i++) adj[prereq[i][1]].push(prereq[i][0]);

    function dfs(index){
        
        if(visited.has(index)) return visited.get(index);

        let reqs = new Set();

        for(let i=0;i<adj[index].length;i++){
            reqs.add(adj[index][i]);
            let new_set = dfs(adj[index][i]);
            for(let item of new_set) reqs.add(item);
        }

        visited.set(index, reqs);

        return reqs;
    }

    let ans = [];
    for(let i=0;i<queries.length;i++){
        dfs(queries[i][1]);
        if(visited.get(queries[i][1]).has(queries[i][0])) ans.push(true);
        else ans.push(false);
    }
    
    return ans;
};

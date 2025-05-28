/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
    let g1 = new Map(), g2 = new Map();

    for(let edge of edges1){
        if(g1.has(edge[0])) g1.get(edge[0]).push(edge[1]);
        else g1.set(edge[0],[edge[1]]);

        if(g1.has(edge[1])) g1.get(edge[1]).push(edge[0]);
        else g1.set(edge[1],[edge[0]]);
    }

    if(k === 0) return new Array(g1.size).fill(1);

    for(let edge of edges2){
        if(g2.has(edge[0])) g2.get(edge[0]).push(edge[1]);
        else g2.set(edge[0],[edge[1]]);

        if(g2.has(edge[1])) g2.get(edge[1]).push(edge[0]);
        else g2.set(edge[1],[edge[0]]);
    }

    let paths = 0, visited = new Set();
    let helper = function(graph, node, k, level, visited){
        if(level >= k) return ;
        visited.add(node);

        for(let neighbor of graph.get(node)){
            if(visited.has(neighbor)) continue;
            visited.add(neighbor);
            helper(graph, neighbor, k, level+1, visited);
            paths++;
            visited.delete(neighbor);
        }
    }

    let max_paths = 0;
    for(let i=0;i<g2.size;i++){
        paths = 0;
        helper(g2,i,k-1,0,visited);
        max_paths = Math.max(max_paths, paths);
        visited.clear();
    }

    let ans = new Array(g1.size);

    for(let i=0;i<g1.size;i++){
        paths = 0;
        helper(g1,i,k,0,visited);
        ans[i] = paths + 1 + max_paths + 1;
        visited.clear();
    }
    return ans;
};

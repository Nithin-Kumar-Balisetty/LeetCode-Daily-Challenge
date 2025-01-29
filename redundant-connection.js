/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let adj = new Map(); 
    
    let dfs = function(edge, visited){
        let [i,j] = edge;
        if(!adj.has(i) || !adj.has(j)) return false;
        if(i === j) return true;
        visited[i-1] = true;

        for(let k=0;k<adj.get(i).length;k++){
            if(!visited[adj.get(i)[k]-1]){
                if(dfs([adj.get(i)[k],j],visited)) return true;
            }
        }

        return false;
    }

    for(let i=0;i<edges.length;i++){
        let visited = new Array(edges.length).fill(false);
        if(dfs(edges[i],visited)) return edges[i];

        if(!adj.has(edges[i][0])) adj.set(edges[i][0], [edges[i][1]]);
        else adj.get(edges[i][0]).push(edges[i][1]);

        if(!adj.has(edges[i][1])) adj.set(edges[i][1], [edges[i][0]]);
        else adj.get(edges[i][1]).push(edges[i][0]);
    }

    return [];
};

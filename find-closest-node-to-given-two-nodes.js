/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    let nodes = edges.length, adj = new Map();

    for(let i=0;i<edges.length;i++) adj.set(i,edges[i]);

    let dist1 = new Array(nodes).fill(-1), dist2 = new Array(nodes).fill(-1);
    
    helper(adj, node1, new Set(), dist1, 0);
    helper(adj, node2, new Set(), dist2, 0);

    let min_dist = -1, index = -1;
    
    for(let i=0;i<nodes;i++){
        
        if(dist1[i] !== -1 && dist2[i] !== -1){
            if(index == -1 || min_dist > Math.max(dist1[i], dist2[i]) ){
                index = i;
                min_dist = Math.max(dist1[i], dist2[i]);
            }
        }
        
    }    

    return index;
};

let helper = function(graph, src, visited, dist, level){
    if(visited.has(src) || src === -1) return ;
    visited.add(src);
    dist[src] = level;
    return helper(graph, graph.get(src), visited, dist, level+1);
}


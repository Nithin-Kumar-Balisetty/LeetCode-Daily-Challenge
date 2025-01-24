/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let terminal_nodes = new Set(), res =[], non_safe_nodes = new Set();

    for(let i=0;i<graph.length;i++){
        if(!graph[i].length) terminal_nodes.add(i);
    }

    let safenode = function(i, visit){
        if(terminal_nodes.has(i)) return true;
        if(non_safe_nodes.has(i)) return false;

        if(visit.has(i)) return false;
        visit.add(i);

        for(let j=0;j<graph[i].length;j++){
            if(!terminal_nodes.has(graph[i][j]) && !safenode(graph[i][j], visit)){
                non_safe_nodes.add(i);
                return false;
            }
        }

        terminal_nodes.add(i);
        return true;
    }

    for(let i=0;i<graph.length;i++){
        if(non_safe_nodes.has(i)) continue;
        if(terminal_nodes.has(i)) res.push(i);
        else if(safenode(i, new Set()))  res.push(i);
    }

    return res;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    let arr = [[0,0,0]], m = grid.length - 1, n = grid[0].length-1;

    let dir = [[0,1],[0,-1],[1,0],[-1,0]];

    let hm = [];

    for(let i=0;i<=m;i++){
        let temp = [];
        for(let j=0;j<=n;j++)  temp.push(0);
        hm.push(temp);
    }

    while(arr.length){
        let start = arr[0];
        arr.shift();
        let i = start[0], j = start[1], cost = start[2];

        if(i > m || j > n || i < 0 || j < 0) continue;
        if(i === m && j === n) return cost;

        if(hm[i][j]) continue;
        hm[i][j] = 1;

        for(let d=1;d<=4;d++){
            if(grid[i][j] === d) arr.unshift([i+dir[d-1][0],j+dir[d-1][1], cost]);
            else arr.push([i+dir[d-1][0],j+dir[d-1][1], cost+1]);
        }
        
    }

    return 0;
};

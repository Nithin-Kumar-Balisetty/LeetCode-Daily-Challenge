/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let total_servers = 0, r = grid.length , c = grid[0].length;

    for(let i=0;i<r;i++){
        let sum = 0;
        for(let j=0;j<c;j++){
            if(grid[i][j]) sum++;
        }
        if(sum<=1) continue;
        
        total_servers += sum;
        for(let j=0;j<c;j++){
            if(grid[i][j]) grid[i][j] = -1;
        }
    }

    for(let j=0;j<c;j++){
        let sum = 0, non_duplicates = 0;
        for(let i=0;i<r;i++){
            sum += Math.abs(grid[i][j]);
            if(grid[i][j] === 1) non_duplicates++;
            if(grid[i][j] === -1) grid[i][j] = 1;
        }

        if(sum<2) continue;
        else total_servers += non_duplicates;
    }

    return total_servers;
};

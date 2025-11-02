/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */

var markGuarded = function(grid, guard){
    let [m,n] = guard;

    for(let i=m-1;i>=0;i--){
        if(grid[i][n] === 1 || grid[i][n] == 2) break;
        else grid[i][n] = 3;
    } 

    for(let i=m+1;i<grid.length;i++){
        if(grid[i][n] === 1 || grid[i][n] == 2) break;
        else grid[i][n] = 3;
    } 

    for(let i=n-1;i>=0;i--){
        if(grid[m][i] === 1 || grid[m][i] == 2) break;
        else grid[m][i] = 3;
    } 

    for(let i=n+1;i<grid[0].length;i++){
        if(grid[m][i] === 1 || grid[m][i] == 2) break;
        else grid[m][i] = 3;
    }
}

var countUnguarded = function(m, n, guards, walls){
    let grid = Array.from({length: m},()=>Array(n).fill(0)), count = 0;
    
    for(let wall of walls) grid[wall[0]][wall[1]] = 1;

    for(let guard of guards) grid[guard[0]][guard[1]] = 2;

    for(let guard of guards) markGuarded(grid, guard);

    for(let row of grid){
        for(let num of row){
            if(!num) count++;
        }
    }

    return count;
};
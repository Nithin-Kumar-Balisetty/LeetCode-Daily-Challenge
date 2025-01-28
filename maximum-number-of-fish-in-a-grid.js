/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {

    function dfs(i,j){
        if(i<0 || i >= grid.length || j < 0 || j >= grid[0].length) return [];
        else if(grid[i][j] === -1 || grid[i][j] === 0) return [];
        else{
            let res = [grid[i][j]];
            grid[i][j] = -1;
            return res.concat(dfs(i,j+1), dfs(i,j-1), dfs(i+1,j), dfs(i-1,j));
        }
    }

    let max_group_sum = 0;

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(!(grid[i][j] === -1 || grid[i][j] === 0)){
                let group = dfs(i,j), sum= 0;
                for(let k=0;k<group.length;k++) sum+= group[k];
                if(sum > max_group_sum) max_group_sum = sum;
            }
        }
    }

    return max_group_sum;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
    let prefix = 0, suffix = 0, total_0 = 0, total_1 = 0, max_diff = 0;

    for(let i=0;i<grid[0].length;i++) total_0 += grid[0][i];
    for(let i=0;i<grid[0].length;i++) total_1 += grid[1][i];

    let ans = total_0 - grid[0][0];

    for(let i=0;i<grid[0].length;i++){
        prefix += grid[0][i];
        a_sum = prefix + (total_1 - suffix);
        b_sum = Math.max(suffix,(total_0-prefix));
        if(ans > b_sum)
            ans = b_sum;

        suffix += grid[1][i];
    }

    return ans;
}

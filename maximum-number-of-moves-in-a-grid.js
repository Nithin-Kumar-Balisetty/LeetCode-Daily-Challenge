/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    let memo = [];

    for(let i=0;i<grid.length;i++){
        let temp = [];
        for(let j=0;j<grid[0].length;j++) temp.push(-1);
        memo.push(temp);
    }

    let max = 0;
    for(let i=0;i<grid.length;i++){
        if(memo[i][0] === -1) helper(grid,i,0,memo);
        max = Math.max(max, memo[i][0]);
    }

    return max;
};

let helper = function(grid,row,col, memo){
    if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return 0;

    if(memo[row][col] !== -1) return memo[row][col];
    let res = 0, flag = false;

    for(let j=-1;j<=1;j++){
        if((row + j) < 0 || (row + j) >= grid.length 
                || (col+1) < 0 || (col+1) >= grid[0].length) continue;
        
        if(grid[row+j][col+1] > grid[row][col]){
            res = Math.max(res,helper(grid,row+j,col+1,memo));
            flag = true;
        }
    }

    memo[row][col] = (flag) ? (res+1) : 0;
    return memo[row][col];

}

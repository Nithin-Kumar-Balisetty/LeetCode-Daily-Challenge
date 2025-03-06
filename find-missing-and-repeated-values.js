/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length * grid[0].length;
    let actualSum = 0, actualSqSum = 0;
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            actualSum += grid[i][j];
            actualSqSum += (grid[i][j] * grid[i][j]);
        }
    }

    let perfectSum = n * (n+1) / 2, perfectSqSum = n * (n +1) * (2*n + 1) / 6;
    let sumDiff = perfectSum - actualSum, sumSqDiff = perfectSqSum - actualSqSum;

    return [(sumSqDiff/sumDiff - sumDiff)/2, (sumSqDiff/sumDiff + sumDiff)/2];
};

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let min = Number.MAX_SAFE_INTEGER, sum = 0, count= 0;

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){   
            if(matrix[i][j] < 0) count++;
            min = Math.min(min, Math.abs(matrix[i][j])); 
            sum += Math.abs(matrix[i][j]);
        }
    }

    if(count % 2) return sum - 2*min;
    return sum;
};
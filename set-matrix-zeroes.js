/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let rows = matrix.length, cols = matrix[0].length;
    let col_zero = false, row_zero = false

    for(let i=0;i<rows;i++){
        if(!matrix[i][0]){
            col_zero = true;
            break;
        }
    }

    for(let j=0;j<cols;j++){
        if(!matrix[0][j]){
            row_zero = true;
            break;
        }
    }

    for(let i=1;i<rows;i++){
        for(let j=1;j<cols;j++){
            if(!matrix[i][j]){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i=1;i<rows;i++){
        if(!matrix[i][0]){
            for(let j=1;j<cols;j++) matrix[i][j] = 0;
        }
    }

    for(let j=1;j<cols;j++){
        if(!matrix[0][j]){
            for(let i=1;i<rows;i++) matrix[i][j] = 0;
        }
    }

    if(col_zero){
        for(let i=0;i<rows;i++) matrix[i][0] = 0; 
    }

    if(row_zero){
        for(let j=0;j<cols;j++) matrix[0][j] = 0;
    }

    return ;
};

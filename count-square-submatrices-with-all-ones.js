/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let m = matrix.length, n = matrix[0].length;

    let memo = [];
    for(let i=0;i<m;i++){
        let row = [];
        for(let j=0;j<n;j++){
            row.push(0);
        }
        memo.push(row);
    }

    let res = 0;
    for(let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            if(matrix[i][j] === 0) memo[i][j] = 0;
            else{
                if((i+1) >= m || (j+1) >=n){
                    memo[i][j] = 1;
                    res+=1;
                }
                else{
                    memo[i][j] = Math.min(memo[i][j+1] , memo[i+1][j] , memo[i+1][j+1]) + 1;
                    res += memo[i][j];
                }
            }
        }
    }

    return res;
};


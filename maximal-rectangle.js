/**
 * @param {character[][]} matrix
 * @return {number}
 */

var area = function(r,c,matrix){
    let ans = 0, min_seq = matrix[0].length - c;
    for(let i=r;i<matrix.length;i++){
        let seq = 0;
        for(let j=c;j<matrix[0].length;j++){
            if(matrix[i][j] == "1") seq++;
            else break;
        }
        min_seq = Math.min(seq, min_seq)
        ans = Math.max(ans, (i - r + 1) * min_seq);
    }

    return ans;
}

var maximalRectangle = function(matrix) {
    let ans = 0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === "1")  ans = Math.max(ans, area(i,j,matrix));
        }
    }

    return ans;
};

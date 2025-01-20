/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(mat, arr) {
    let row_tracker = new Array(arr.length).fill(0);
    let col_tracker = new Array(arr[0].length).fill(0);

    let hm = new Array(arr.length * arr[0].length).fill([]);

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[0].length;j++) hm[arr[i][j]] = [i,j];
    }

    for(let i=0;i<mat.length;i++){
        row_tracker[hm[mat[i]][0]]++;
        col_tracker[hm[mat[i]][1]]++;

        if(row_tracker[hm[mat[i]][0]] === arr[0].length || col_tracker[hm[mat[i]][1]]=== arr.length)
            return i;
    }

    return 0;
};

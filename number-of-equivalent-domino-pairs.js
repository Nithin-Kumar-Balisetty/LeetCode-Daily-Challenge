/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let arr = [], count = 0;

    for(let i=0;i<9;i++){
        arr.push([]);
        for(let j=0;j<9;j++)
            arr[arr.length-1].push(0);
    }

    for(let i=0;i<dominoes.length;i++){
        if(dominoes[i][0] === dominoes[i][1])
            arr[dominoes[i][0]-1][dominoes[i][1]-1]++;
        else{
            arr[dominoes[i][1]-1][dominoes[i][0]-1]++;
            arr[dominoes[i][0]-1][dominoes[i][1]-1]++;
        }
        count += (arr[dominoes[i][0]-1][dominoes[i][1]-1] -1);
    }

    return count;
};

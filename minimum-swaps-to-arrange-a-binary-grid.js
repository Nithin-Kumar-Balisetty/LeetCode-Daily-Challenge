/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    let [r,c] = [grid.length, grid[0].length];

    let trailing = Array(r).fill(0);
    
    for(let i=0;i<r;i++){
        let count = 0;
        for(let j=c-1;j>=0;j--){
            if(grid[i][j] === 0) count++;
            else break;
        }
        trailing[i] = count;
    }

    let steps = 0;
    for(let i=0;i<r;i++){
        if(trailing[i] >= (c-i-1)){
            trailing[i] = -1;
            continue;
        }
        else{
            let index = -1;
            for(let j=i+1;j<r;j++){
                if(trailing[j] >= (c-i-1)){
                    index = j;
                    break;
                }
            }
            if(index === -1) return -1;
            else{
                for(let j=index;j>=i;j--){
                    trailing[j] = trailing[j-1];
                }
                steps+= index-i;
            }
        }
    }

    
    return steps;
};

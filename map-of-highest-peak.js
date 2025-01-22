/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {

    let r = isWater.length, c = isWater[0].length, elements = [], current = 0;
    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(isWater[i][j] === 1){
                isWater[i][j] = 0;
                elements.push([i,j]);
            }
            else isWater[i][j] = -1;
        }
    }
    
    while(elements.length){
        current++;
        let new_elements = [];
        while(elements.length){
            let [row, col] = elements.pop();

            if ((row - 1) >= 0 && isWater[row - 1][col] === -1) {
                isWater[row - 1][col] = current;
                new_elements.push([row - 1, col]); 
            }

            if ((row + 1) < r && isWater[row + 1][col] === -1) {
                isWater[row + 1][col] = current;
                new_elements.push([row + 1, col]); 
            }

            if ((col - 1) >= 0 && isWater[row][col - 1] === -1) {
                isWater[row][col - 1] = current;
                new_elements.push([row, col - 1]); 
            }

            if ((col + 1) < c && isWater[row][col + 1] === -1) {
                isWater[row][col + 1] = current;
                new_elements.push([row, col + 1]); 
            }
        }
        elements = new_elements;
    }

    return isWater;
};

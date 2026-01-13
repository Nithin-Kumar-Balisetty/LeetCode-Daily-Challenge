/**
 * @param {number[][]} squares
 * @return {number}
 */

var areaDiff = function(y, squares){
    let diff = 0;

    for(let square of squares){
        if(y >= (square[1] + square[2]))  // square below
            diff += (square[2] * square[2]);        
        else if( y <= square[1] )  // square above
            diff -= (square[2] * square[2]);
        else{
            diff += (y - square[1]) * square[2];
            diff -= (square[1] + square[2] - y) * square[2];
        }
    }

    return diff;
}

var separateSquares = function(squares) {
    let diff = Number.MAX_SAFE_INTEGER;

    let y_min = squares[0][1], y_max = squares[0][1] + squares[0][2];
    for(let square of squares){
        if(square[1] < y_min) y_min = square[1];
        if((square[1] + square[2]) > y_max) y_max = (square[1] + square[2]);
    }

    let offset = Math.pow(10,-5), ans = y_min;

    while(y_min <= y_max){
        let y = y_min + ((y_max - y_min)/2);
        area_diff = areaDiff(y, squares);
        if(diff >= Math.abs(area_diff)){
            diff = Math.abs(area_diff);
            ans = y;
        }

        if(area_diff < 0) y_min = y + offset;
        else y_max = y - offset;
    }

    return ans;
};
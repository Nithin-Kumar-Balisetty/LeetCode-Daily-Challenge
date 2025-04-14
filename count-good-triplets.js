/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for(let i=0;i<arr.length-2;i++){
        for(let j=i+1;j<arr.length-1;j++){
            for(let k=j+1;k<arr.length;k++){
                let d1 = Math.abs(arr[i] - arr[j]);
                let d2 = Math.abs(arr[j]-arr[k]);
                let d3 = Math.abs(arr[i]-arr[k]);
                if(d1 <= a && d2 <= b && d3 <= c) count++;
            }
        }
    }

    return count;
};

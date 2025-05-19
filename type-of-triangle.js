/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    let [a,b,c] = nums;

    if(a === b && b === c) return "equilateral";
    else{
        if(a < (b + c) && b < (a + c) && c < (a + b)){
            if(a === b || b === c || a === c) return "isosceles";
            return "scalene";
        }
        return "none";
    }

};

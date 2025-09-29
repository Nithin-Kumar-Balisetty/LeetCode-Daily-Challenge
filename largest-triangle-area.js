/**
 * @param {number[][]} points
 * @return {number}
 */

let distance = (a,b) => Math.sqrt(Math.pow((a[1]-b[1]),2) + Math.pow((a[0]-b[0]),2));

var largestTriangleArea = function(points) {
    let max = 0;
    
    for(let i=0;i<points.length-2;i++){
        for(let j=i+1;j<points.length-1;j++){
            for(let k=j+1;k<points.length;k++){
                let [a,b,c] = [distance(points[i],points[j]),distance(points[j],points[k]),
                                distance(points[k],points[i])];
                max = Math.max(max, (a+b+c)*(a+b-c)*(b+c-a)*(a+c-b));
            }
        }
    }

    return (1/4) * Math.sqrt(max);
};

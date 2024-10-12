/**
 * @param {number[][]} intervals
 * @return {number}
 */

let intersection = function(a,b){
    return (b[1] >=a[0] && b[0]<=a[1]);
}

var minGroups = function(intervals) {
    let start_i = [] , end_i = [];
    for(let i=0;i<intervals.length;i++){
        start_i.push(intervals[i][0]);
        end_i.push(intervals[i][1]);
    }

    start_i.sort((a,b)=>(a-b));
    end_i.sort((a,b)=>(a-b));

    let first = 0,second = 0,max = 0,group = 0;
    while(first<intervals.length){
        if(start_i[first]<=end_i[second]){
            first++;
            group++;
        }
        else{
            group--;
            second++
        }
        max = Math.max(max,group);
    }

    return max;
};

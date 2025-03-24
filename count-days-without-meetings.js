/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */

let intersect = function(a,b){
    b[0] = Math.min(a[0],b[0]);
    b[1] = Math.max(a[1],b[1]);
} 
var countDays = function(days, meetings) {
    meetings.sort((a,b)=>(a[0]-b[0]));

    let count = 0;
    count += (meetings[0][0] - 1);
    for(let i=1;i<meetings.length;i++){
        if(meetings[i-1][1] < meetings[i][0]) 
            count +=(meetings[i][0] - meetings[i-1][1] -1); 
        intersect(meetings[i-1], meetings[i]);
    }

    count += (days - meetings[meetings.length-1][1]);
    return count;
};

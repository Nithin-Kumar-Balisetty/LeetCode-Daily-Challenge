/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    for(let i=0;i<times.length;i++)
        times[i].push(i);
    times.sort((a,b)=>(a[0]-b[0]));
    
    if(times[0][2]  === targetFriend) return 0;

    let arr = [],counter = 0, time = 0;
    while(counter<times.length){
        if(arr.length === 0){
            arr.push(times[counter]);
            let min_end_time = times[counter][1];
            counter++;
            let j = counter;
            for(j=counter;j<times.length;j++){
                if(min_end_time <= times[j][0]){
                    break;
                }
                if(times[j][2] === targetFriend) return arr.length;
                arr.push(times[j]);
                min_end_time = Math.min(min_end_time,times[j][1]);
            }
            counter = j;
        }
        let flag = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i][1] <= times[counter][0]){
                flag = true;
                if(times[counter][2] === targetFriend) return i;
                arr[i] = times[counter]; 
                counter++;
                break;
            }
        }

        if(!flag){
            if(times[counter][2] === targetFriend) return arr.length;
            arr.push(times[counter]);
            counter++;
        }
    }

    return 0;
};

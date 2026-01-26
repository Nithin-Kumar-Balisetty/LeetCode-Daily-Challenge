/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>(a-b));
    let min = arr[1] - arr[0], ans = [];

    for(let i=0;i<(arr.length-1);i++){
        if(min > (arr[i+1] - arr[i])){
            while(ans.length) ans.pop();
            ans.push([arr[i],arr[i+1]]);
            min = arr[i+1] - arr[i]; 
        }
        else if(min == (arr[i+1] - arr[i])) ans.push([arr[i],arr[i+1]]);
    }

    return ans;
};

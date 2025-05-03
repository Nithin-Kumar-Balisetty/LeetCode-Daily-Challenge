/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function(tops, bottoms) {
    let arr = new Array(6).fill(0), flag = false, min = null;
    
    for(let i=0;i<tops.length;i++){
        if(tops[i] === bottoms[i]){
            arr[tops[i]-1]++;
            if(arr[tops[i]-1] === tops.length){
                flag = true;
                min = tops[i];
            }
        }
        else{
            arr[tops[i]-1]++;
            arr[bottoms[i]-1]++;
            if(arr[tops[i]-1] === tops.length){
                flag = true;
                min = tops[i];
            } 
            if(arr[bottoms[i]-1] === tops.length){
                flag = true;
                min = bottoms[i];
            } 
        }
    }

    if(!flag) return -1;
    else{
        let top = 0, bottom = 0;
        for(let i=0;i<tops.length;i++){
            if(tops[i] === min) top++;
            if(bottoms[i] === min) bottom++;
        }
        
        if(top >= tops.length || bottom >= bottoms.length) return 0;

        return tops.length - Math.max(top,bottom);
    }
};


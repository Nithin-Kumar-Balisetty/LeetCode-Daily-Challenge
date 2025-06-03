/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
   if(ratings.length === 1) return 1;
   let start = 1, count = 0;

   for(let i=0;i<ratings.length;i++){
        let s = i, inc = false, desc = false;

        if(i === (ratings.length-1)){
            count += 2; 
            break;
        }

        // increasing
        while((i+1)<ratings.length && ratings[i] <= ratings[++i]){
            inc = true;
        };
        
        if(inc){
            let range = (i === ratings.length-1 && ratings[ratings.length-2]<=ratings[ratings.length-1]) ? (i+1) : (i-1);
            for(let j=s;j<range;j++){
                count += start;
                if((j+1) < ratings.length && ratings[j] === ratings[j+1]) start = 1;
                else start++;
            }

            if(i === (ratings.length -1) && ratings[ratings.length-2]<=ratings[ratings.length-1]) break;

            i=i-2;
            continue;
        }

        i = s;

        //decreasing
        while((i+1)<ratings.length && ratings[i] >= ratings[++i]){
            desc = true;
        }


        
        if(desc){
        
            let prev_start = Math.max(start,1); 
            start = 1;
            let range = (i === (ratings.length-1) && ratings[i-1]>=ratings[i]) ? i : (i-1);
            for(let j= range;j>=s;j--){
              
                if(j === s){
                    count+= Math.max(prev_start,start);
                }
                else count += start;
            
                if(j>s && ratings[j] === ratings[j-1]) start = 1;
                else start++;
            }
            if(i === (ratings.length-1) && ratings[i-1]>=ratings[i]) break;

            i--;
            start = 2;
            continue;
        }
   }

   return count;
};

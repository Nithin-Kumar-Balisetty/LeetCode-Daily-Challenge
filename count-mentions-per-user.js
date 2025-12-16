/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */

var countMentions = function(numberOfUsers, events) {
   let n = numberOfUsers;
   let mentions = new Array(n).fill(0);
   
   events.sort((a,b)=>{
     if(a[1] === b[1]) return (b[0].charCodeAt(0) - a[0].charCodeAt(0));
     else return (a[1]-b[1]);
   })

   let set = new Set(), map = new Map();

   for(let e of events){
        if(e[0] === "OFFLINE"){
            map.set(parseInt(e[2]), parseInt(e[1]) + 60);
            set.add(parseInt(e[2]));
        }
        else{
            for(let num of set){
                while(map.get(num) <= parseInt(e[1])){
                    set.delete(num);
                    map.delete(num);
                }
            }
            if(e[2] === "HERE"){
                for(let i=0;i<n;i++){
                    if(!set.has(i)) mentions[i]++;
                }
            }
            else if(e[2] === "ALL"){
                for(let i=0;i<n;i++){
                    mentions[i]++;
                }
            }
            else{
                const numbers = e[2].match(/\d+/g).map(Number).reverse();
                for(let num of numbers) mentions[num]++;
            }
        }
   }
   
   return mentions; 
};

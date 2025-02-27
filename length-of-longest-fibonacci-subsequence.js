/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let max = 0, hm = new Map(), bool = [];

    for(let i=0;i<arr.length;i++){
        bool.push([]);
        for(let j=0;j<arr.length;j++) bool[i].push(false);
    } 

    for(let i=0;i<arr.length;i++)
        hm.set(arr[i],i);

    for(let i=0;i<arr.length-2;i++){
        let prev_1 = arr[i];
        for(let j=i+1;j<arr.length-1;j++){
            let prev_2 = arr[j];

            if(!bool[hm.get(prev_1)][hm.get(prev_2)]){
                let new_element = prev_1 + prev_2, count = 2;

                while(hm.has(new_element) && hm.get(new_element) > hm.get(prev_2)){
                   bool[hm.get(prev_1)][hm.get(prev_2)] = true;
                    max = Math.max(max, ++count);
                    prev_1 = prev_2;
                    prev_2 = new_element;
                    new_element += prev_1;
                }
            }

            prev_1 = arr[i];
        }
    }

    return max;
};

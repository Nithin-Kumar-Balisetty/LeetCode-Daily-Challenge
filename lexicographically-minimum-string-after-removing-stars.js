/**
 * @param {string} s
 * @return {string}
 */

var clearStars = function(s) {
    let char_arr = new Array(26).fill().map(()=>[]);
    let ans = s.split('');

    for(let i=0;i<ans.length;i++){
        if(ans[i] === '*'){
            if(i === 0) continue;

            for(let j=0;j<26;j++){
                if(char_arr[j].length){
                    ans[char_arr[j].pop()] = '*';
                    break;
                }
            }
        }
        else char_arr[s.charCodeAt(i)-97].push(i);
    }

    return ans.filter((a)=>(a!='*')).join('');
};

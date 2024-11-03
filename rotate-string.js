/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false;
    s += s;
    let counter = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === goal[counter]){
            counter++;
            if(counter === goal.length) return true;
        }
        else{
            i -= counter;
            counter = 0;
        }
    }
    return false;
};

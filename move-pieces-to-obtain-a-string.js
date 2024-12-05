/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    let first = 0, second = 0, f_char = 0, s_char = 0;

    while(first < start.length && second < target.length){
        while(start[first] === '_' && first < start.length) first++;
        while(target[second] === '_' && second < target.length) second++;

        if(second === target.length && first < start.length){
            f_char++;
            first++;
            break;
        }
        if(first === start.length && second < target.length){
            s_char++;
            second++;
            break;
        }


        if(first === start.length && second === target.length) return true;

        if(start[first] !== target[second]) return false;
        if(start[first] === 'L' && first<second) return false;
        if(start[first] === 'R' && first>second) return false;

        first++;
        second++;
        s_char++;
        f_char++;
    }

    while(first < start.length){
        if(start[first] != '_') f_char++;
        first++;
    }

    while(second < target.length){
        if(target[second] != '_') s_char++;
        second++;
    }

    return (s_char === f_char);
    
};

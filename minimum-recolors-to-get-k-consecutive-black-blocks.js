/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let start = 0, end = 0 , no_b = 0, op = blocks.length;
    while(end <= k-1){
        if(blocks[end] === 'B') no_b++;
        end++;
    }
    
    op = Math.min(op, k-no_b);
    for(let i = end;i<blocks.length;i++,start++){
        if(blocks[i] === 'B') no_b++;
        if(blocks[start] === 'B') no_b--;
        op = Math.min(op, k - no_b);
    }

    return op;
};

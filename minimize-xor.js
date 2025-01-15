/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    let stack = [], n = num2, set_bits = 0;
    
    while(n > 0){
        if(n%2) set_bits++;
        n = parseInt(n/2);
    }

    n = num1;
    
    while(n > 0){
        stack.push(n%2);
        n = parseInt(n/2);
    }

    if(set_bits > stack.length){
        let len = set_bits - stack.length;
        for(let i=0;i<len;i++) stack.push(0);
    }
    
    let ans = 0;

    while(stack.length){
        if(stack.length === set_bits){
            stack.pop();
            set_bits--;
            ans += Math.pow(2,stack.length);
        }
        else{
            if(stack.pop()){
                if(set_bits){
                    ans += Math.pow(2,stack.length);
                    set_bits--;
                }
            }
        }
    }

    return ans;
};

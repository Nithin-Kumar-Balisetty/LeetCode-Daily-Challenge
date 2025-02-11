/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let stack = [];
    
    let compare = function(){
        let counter = part.length -1 ;
        
        while(counter >= 0 && stack[stack.length - (part.length-counter)] === part[counter]) counter--;

        return (counter<0);
    }

    for(let i=0;i<s.length;i++){
        stack.push(s[i]);

        if(stack.length >= part.length && compare()){
            let counter = 0;
            while((counter++) < part.length) stack.pop();
        }
    }

    return stack.join('');
};

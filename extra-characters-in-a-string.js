/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */

let node = function(val){
    this.val = val;
    this.children = new Map();
}

let buildTrie = function(dictionary){
    let parent = new node(null);
    for(let i=0;i<dictionary.length;i++){
        let temp = parent;
        for(let j=0;j<dictionary[i].length;j++){
            if(temp.children.has(dictionary[i][j]))
                temp = temp.children.get(dictionary[i][j]);
            
            else{
                let new_node = new node(dictionary[i][j]);
                temp.children.set(dictionary[i][j], new_node);
                temp = new_node;
            }
        }
        temp.val = null;
    }

    return parent;
}


let dp = function(index, parent,s, memo){
    if(memo.has(index)) return memo.get(index);

    if(index >= s.length) return 0;
    if(!parent.children.has(s[index])){
        let res = 1 + dp(index+1,parent,s,memo)
        memo.set(index,res);
        return res;
    }
    else{
        let counters = [], temp = parent,i = index;
        while(temp.children.has(s[i]) && i<s.length){
            if(temp.children.get(s[i]).val === null) counters.push(i);
            temp = temp.children.get(s[i]);
            i++;
        }
        let res = 1 + dp(index+1,parent,s, memo);

        if(counters.length === 0 ){
            res = Math.min(res,(i-index)+dp(i,parent,s, memo));
            memo.set(index,res);
            return res;
        }

        for(let j=0;j<counters.length;j++){
            res = Math.min(res,dp(counters[j]+1,parent,s, memo));
        }
        
        memo.set(index, res);
        return res;
    }
}

var minExtraChar = function(s, dictionary) {
    return dp(0,buildTrie(dictionary),s,new Map());
};


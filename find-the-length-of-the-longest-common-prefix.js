/**
 * @param {number[]} arr1
 * @param {number[]} arr2
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



var longestCommonPrefix = function(arr1, arr2) {
    let dictionary = arr2.map((x)=> x.toString());
    let parent = buildTrie(dictionary);
    let max = 0;

    for(let i=0;i<arr1.length;i++){
        let temp = parent;
        let str = arr1[i].toString(),counter = 0;        
        while(counter < str.length && temp.children.has(str[counter]))
            temp = temp.children.get(str[counter++]);
        max = Math.max(max,counter);
    }

    return max;
};

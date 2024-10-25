/**
 * @param {string[]} folder
 * @return {string[]}
 */

function Node(val){
    this.val = val;
    this.children = new Map();
    this.end = false;
}

class PrefixTree{
    constructor(parent){
        this.parent = parent;
    }
    insert(val){
        let folders = val.split('/') , start = 1, temp = this.parent; 
        while(start < folders.length){
            let folder = '/'+folders[start];
            if(temp.children.has(folder)){
                if(temp.children.get(folder).end){
                    temp = temp.children.get(folder);
                    break;
                }
                else
                    temp = temp.children.get(folder);
            }
            else{
                temp.children.set(folder, new Node(folder));
                temp = temp.children.get(folder);
                temp.end = false;
            }
            start++;
        }
        temp.end = true;
    }
    traverse(parent){
        if(parent.end)
            return [parent.val];
        let res = [];
        
        let children = Array.from(parent.children.keys())
        
        for (let i = 0; i < children.length; i++) {
            if(parent.children.has(children[i]))
                res.push(...this.traverse(parent.children.get(children[i])));
        }
        if(parent.val){
            for(let i=0;i<res.length;i++)
                res[i] = parent.val + res[i];
        }
        
        return res;
    }
}


var removeSubfolders = function(folder) {
    let parent = new Node(null);
    let pt = new PrefixTree(parent);
    for(let i=0;i<folder.length;i++){
        pt.insert(folder[i]);
    }
    return pt.traverse(parent);
};

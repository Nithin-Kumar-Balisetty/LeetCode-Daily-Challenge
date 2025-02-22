/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let values = [], levels = [];
    for(let i=0;i<traversal.length;i++){
        if(traversal[i] === '-'){
            let level = 1;
            while((i+1) < traversal.length && traversal[i+1] === '-'){
                i++;
                level++;
            }
            levels.push(level);
        }else{
            let val = '';
            val+=traversal[i];
            while((i+1) < traversal.length && traversal[i+1] !=='-'){
                i++;
                val+=traversal[i];
            }
            values.push(parseInt(val));
        }
    }
    
    let tree_node = new TreeNode(values[0]), ancestor_stack = [tree_node], level_pointer = 0;
    for(let i=1;i<values.length;i++){
        if(level_pointer === 0){
            tree_node.left = new TreeNode(values[i]);
            ancestor_stack.push(tree_node.left);
            level_pointer++;
        }
        else{
            if(levels[level_pointer] > levels[level_pointer-1]){
                level_pointer++;
                let last_node = ancestor_stack[ancestor_stack.length-1];
                if(!last_node.left){
                    last_node.left = new TreeNode(values[i]);
                    ancestor_stack.push(last_node.left);
                }
                else{
                    last_node.right = new TreeNode(values[i]);
                    ancestor_stack.push(last_node.right);
                }
            }
            else{
                let parent_node = ancestor_stack[levels[level_pointer]-1];
                while(ancestor_stack.length > levels[level_pointer]){
                    ancestor_stack.pop();
                }
                if(!parent_node.left){
                    parent_node.left = new TreeNode(values[i]);
                    ancestor_stack.push(parent_node.left);
                }
                else{
                    parent_node.right = new TreeNode(values[i]);
                    ancestor_stack.push(parent_node.right);
                }
                level_pointer++;
            }   
        }
    }

    return tree_node;
};

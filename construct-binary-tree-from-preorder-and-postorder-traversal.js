/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let tree_node = new TreeNode(preorder[0]);
    let ancestor_stack = [tree_node], pointer = 0;

    for(let i=1;i<preorder.length;i++){
        if(preorder[i] === postorder[pointer]){
            let parent = ancestor_stack.pop();
            ancestor_stack.push(parent);   
            if(!parent.left) parent.left = new TreeNode(preorder[i]);
            else parent.right = new TreeNode(preorder[i]);
            pointer++;    
        }
        else{
            while(ancestor_stack.length && pointer < postorder.length 
                    && ancestor_stack[ancestor_stack.length-1].val === postorder[pointer]){
                    ancestor_stack.pop();
                    pointer++;
            } 
            let parent = ancestor_stack.pop();
            ancestor_stack.push(parent);
            if(!parent.left){
                parent.left = new TreeNode(preorder[i]);
                ancestor_stack.push(parent.left);
            }
            else{
                parent.right = new TreeNode(preorder[i]);
                ancestor_stack.push(parent.right);
            }       
        }
    }
    while(ancestor_stack.length) ancestor_stack.pop();  //optional
    
    return tree_node;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if(!root1 && !root2) return true;
    else if(!root1) return false;
    else if(!root2) return false;
    else if(root1.val !== root2.val) return false;

    if(!root1.left && !root1.right && !root2.left && !root2.right) return true;

    let l1 = (root1.left) ? (root1.left.val) : null;
    let r1 = root1.right ? (root1.right.val) : null ;
    let l2 = (root2.left) ? (root2.left.val) : null;
    let r2 = root2.right ? (root2.right.val) : null ;

    if(l1 === l2 && r1 === r2)
        return true && flipEquiv(root1.left,root2.left) && flipEquiv(root1.right,root2.right);
    
    else if(l1 === r2 && l2 === r1)
        return true && flipEquiv(root1.left,root2.right) && flipEquiv(root1.right,root2.left);
    
    return false;
};

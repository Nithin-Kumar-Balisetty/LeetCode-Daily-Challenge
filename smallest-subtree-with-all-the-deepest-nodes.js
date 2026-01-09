/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var helper = function(node){
    if(!node) return [null,0];
    if(!node.left && !node.right) return [node, 1];

    let ltree =  helper(node.left), rtree = helper(node.right);

    if(!ltree[0]) return [rtree[0], rtree[1]+1];
    if(!rtree[0]) return [ltree[0],ltree[1]+1];

    if(ltree[1] === rtree[1]) return [node, ltree[1]+1];
    else if(ltree[1] > rtree[1]) return [ltree[0],ltree[1]+1];
    else return [rtree[0], rtree[1]+1];
}

var subtreeWithAllDeepest = function(root) {
    let ans = helper(root);
    return ans[0];
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {number}
 */
var sumRootToLeaf = function(node) {
    let ans = 0;
    let dfs = function(root, sum){
        if(!root) return ;
        if(!root.left && !root.right){
            ans += sum;
            return ;
        }

        let left_sum = (root.left) ? (2*sum + root.left.val): sum;
        let right_sum = (root.right)?(2*sum + root.right.val): sum;       
        dfs(root.left, left_sum);
        dfs(root.right, right_sum);
    }

    dfs(node,node.val);

    return ans;
};

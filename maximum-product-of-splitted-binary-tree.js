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
 * @return {number}
 */

var sumNodes = function(node, memo){
    if(!node) return 0;
    if(memo.has(node)) return memo.get(node);
    if(!node.left && !node.right){
        memo.set(node,node.val);
        return node.val;
    }

    let total_sum = node.val + sumNodes(node.left, memo) + sumNodes(node.right, memo)
    memo.set(node, total_sum);
    return total_sum;
}

var maxProduct = function(root) {
    let memo = new Map();
    let total = sumNodes(root, memo), pr = Number.MIN_SAFE_INTEGER;

    let queue = [root];

    while(queue.length){
        let node = queue.shift();

        if(!node.left && !node.right) pr = Math.max(pr, node.val * (total-node.val));

        if(node.left){
            pr = Math.max(pr, memo.get(node.left) * (total - memo.get(node.left)));
            queue.push(node.left);
        }
        if(node.right){
            pr = Math.max(pr, memo.get(node.right) * (total - memo.get(node.right)));
            queue.push(node.right);
        }
    }

    return pr % (Math.pow(10,9) + 7);
};
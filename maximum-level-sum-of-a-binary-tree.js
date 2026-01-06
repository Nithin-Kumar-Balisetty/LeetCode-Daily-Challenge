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
var maxLevelSum = function(root) {
    let queue = [[root,1]], level = 1, sum = 0, ans = 1, max_sum = Number.MIN_SAFE_INTEGER;

    while(queue.length){
        let [cur_node, cur_level] = queue.shift();
        if(cur_level === level)  sum += cur_node.val;
        else{
            if(sum > max_sum){
                ans = level;
                max_sum = sum;
            }
            sum = cur_node.val;
            level = cur_level;
        }
        if(cur_node.left) queue.push([cur_node.left,cur_level+1]);
        if(cur_node.right) queue.push([cur_node.right,cur_level+1]);
    }

    if(sum > max_sum) ans = level;
    return ans;
};
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
 */
var FindElements = function(root) {
    this.value_set = new Set();
    this.value_set.add(0);
    root.val =0;

    let queue = [root];
    
    while(queue.length){
        let node = queue.shift();
        if(node.left){
            node.left.val = 2*node.val + 1;
            queue.push(node.left);
            this.value_set.add(node.left.val);
        }
        if(node.right){
            node.right.val = 2*node.val + 2;
            queue.push(node.right);
            this.value_set.add(node.right.val);
        }
    }

    return ;

};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.value_set.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

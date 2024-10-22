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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    let arr = [root], sums = [], level = 0;

    while(true){
        let level_length = arr.length,flag = true,sum = 0;
        for(let i=0;i<level_length;i++){
            let left_node = (arr[i]) ? (arr[i].left) : null;
            let right_node = (arr[i]) ? (arr[i].right) : null;
            if (left_node || right_node) flag = false;
            if(left_node) arr.push(left_node);
            if(right_node) arr.push(right_node);
        }
        while(level_length>0){
            if(arr[0]) sum+=arr[0].val;
            arr.shift();
            level_length--;
        }
        sums.push(sum);
        level++;
        if(flag){
            if(level<k) return -1;
            break;
        }
    }

    sums.sort((a,b)=>(b-a));
    return sums[k-1];

};

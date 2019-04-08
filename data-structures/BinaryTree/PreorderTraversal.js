/*
  Binary Tree Preorder Traversal

  Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]

*/

var TreeNode = {
  val: 1,
  right:
    TreeNode =  {
      val: 2,
      right: null,
      left: TreeNode = { val: 3, right: null, left: null }},
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Recursive sollution
var preorderTraversal = function(root, arr = []) {
    //console.log(root.right.val);
    //console.log(root);
    if (root) {
      arr.push(root.val);
      preorderTraversal(root.right, arr);
      preorderTraversal(root.left, arr);
    }
  
    return arr;
};

console.log(preorderTraversal(TreeNode));



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


// var TreeNode =  {
//   val: 3,
//   right: TreeNode = { val: 2, right: null, left: null },
//   left: TreeNode = { val: 1, right: null, left: null } };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Recursive sollution
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversalRecursive = function(root, arr = []) {
    if (root) {
      arr.push(root.val);
      preorderTraversalRecursive(root.left, arr);
      preorderTraversalRecursive(root.right, arr);
    }
  
    return arr;
};

/**
 * Iterative sollution
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversalIterative = function(root) {
  if (!root) { return [] };
  var res = [];
  var stack = [root];

  while(stack.length) {
    var node = stack.pop();
    res.push(node.val);
    if (node.right) { stack.push(node.right) };
    if (node.left) { stack.push(node.left) };
  }
  return res;
}


console.log(preorderTraversalRecursive(TreeNode));
console.log(preorderTraversalIterative(TreeNode));

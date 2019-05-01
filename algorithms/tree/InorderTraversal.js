/*
  Binary Tree Inorder Traversal

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
*/

var TreeNode = {
  val: 1,
  right:
   TreeNode = {
     val: 2,
     right: null,
     left: TreeNode = { val: 3, right: null, left: null } },
  left: null }

/**
 * Recursive sollution
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalRecursive = function(root) {
  if (!root) {
    return [];
  }

  return [
      ...inorderTraversalRecursive(root.left),
      root.val,
      ...inorderTraversalRecursive(root.right)
  ];
};

/**
 * Iterative sollution
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalIterative = function(root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
}


console.log('Recursive: ' + inorderTraversalRecursive(TreeNode));//[1,3,2]
console.log('Iterative: ' + inorderTraversalIterative(TreeNode));
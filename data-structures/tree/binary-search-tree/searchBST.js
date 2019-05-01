/*
Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
**************************

Should return a subtree

      2     
     / \   
    1   3
*/

var TreeNode = {
  val: 4,
  right: TreeNode = { val: 7, right: null, left: null },
  left:
   TreeNode = {
     val: 2,
     right: TreeNode = { val: 3, right: null, left: null },
     left: TreeNode = { val: 1, right: null, left: null } } }

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  var search = function(root, val) {
    if (root.val === val){
        return root;
    } else if (val < root.val && root.left !== null) {
        return search(root.left, val);
    } else if (val > root.val && root.right !== null) {
        return search(root.right, val);
    } else return [];
  }

  return search(root, val);
};

console.log(searchBST([4,2,7,1,3], 5));

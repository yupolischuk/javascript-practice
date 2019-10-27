/*
Given a tree
root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7

*/
var TreeNode = {
  val: 5,
  right:
   TreeNode = {
     val: 6,
     right: TreeNode = { val: 7, right: null, left: null },
     left: null },
  left:
   TreeNode = {
     val: 3,
     right: TreeNode = { val: 4, right: null, left: null },
     left: TreeNode = { val: 2, right: null, left: null } } }


var deleteNode = function(root, key) {
  var pre, cur=root, tmp;

  while(cur) {
      if(cur.val > key) {
          pre = cur;
          cur = cur.left;
      } else if(cur.val < key) {
          pre = cur;
          cur = cur.right;
      } else {
          if(!cur.left || !cur.right) {
              if(!pre) {
                  return cur.left || cur.right;
              }
              if(pre.left === cur) {
                  pre.left = cur.left || cur.right;
              } else {
                  pre.right = cur.left || cur.right;
              }
              return root;
          }
          tmp = cur;
          pre = cur;
          cur = cur.right;
          while(cur.left) {
              pre = cur;
              cur = cur.left;
          }
          tmp.val = cur.val;
          key = cur.val;
      }
  }
  return root;
};

console.log(deleteNode(TreeNode, 3));

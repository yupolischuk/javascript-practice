/*
Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5

Return
         4
       /   \
      2     7
     / \   /
    1   3 5


Input [4,2,7,1,3], 5

Output [4,2,7,1,3,5]
*/

function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

var insertIntoBST = function(root, val) {
	if(root===null){
		root = new TreeNode(val);
		return root;
	}
	if(root.val>val) root.left = insertIntoBST(root.left, val);
	else root.right = insertIntoBST(root.right, val);
	return root;
};

// TODO rewrite insertions with loop
var tree = insertIntoBST(null, 4);
tree = insertIntoBST(tree, 2);
tree = insertIntoBST(tree, 7);
tree = insertIntoBST(tree, 1);
tree = insertIntoBST(tree, 3);
console.log(insertIntoBST(tree, 5));

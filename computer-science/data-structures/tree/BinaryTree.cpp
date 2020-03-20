#include <iostream>
#include <cstddef>

class Node {
public:
    int data;
    Node *left;
    Node *right;
    Node(int d) {
        data = d;
        left = NULL;
        right = NULL;
    }
};

class Solution {
public:
    Node* insert(Node* root, int data) {
        if(root == NULL) {
            return new Node(data);
        } else {
            Node* cur;
            if(data <= root->data) {
                cur = insert(root->left, data);
                root->left = cur;
            } else {
                cur = insert(root->right, data);
                root->right = cur;
            }

            return root;
        }
    }


    void preOrder(Node *root) {
        if (root == NULL) { return; }

        std::cout << root->data << " ";
        preOrder(root->left);
        preOrder(root->right);
    }

    void postOrder(Node *root) {
        if (root == NULL) { return; }
        postOrder(root->left);
        postOrder(root->right);
        std::cout << root->data << " ";
    }

    void inOrder(Node *root) {
        if (root == NULL) { return; }
        inOrder(root->left);
        std::cout << root->data << " ";
        inOrder(root->right);
    }


};

/*
 Input
 6
 1 2 5 3 6 4

  1
  \
   2
    \
     5
    /  \
   3    6
    \
     4

 Output
 Preorder
 1 2 5 3 4 6

 Postorder
 4 3 6 5 2 1

 Inorder
 1 2 3 4 5 6 

*/
int main() {

    Solution myTree;
    Node* root = NULL;

    int t;
    int data;

    std::cin >> t;

    while(t-- > 0) {
        std::cin >> data;
        root = myTree.insert(root, data);
    }

    std::cout << "PreOrder " << "\n";
    myTree.preOrder(root);

    std::cout  << "\n" << "PostOrder " << "\n";
    myTree.postOrder(root);

    std::cout  << "\n" << "InOrder " << "\n";
    myTree.inOrder(root);
    std::cout   << "\n";

    return 0;
}

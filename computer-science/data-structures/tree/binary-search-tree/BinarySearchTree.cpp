#include <iostream>

using namespace std;

struct node
{
    // так как нет root.node не можем возвращаться вверх при обходе и проходить все узлы дерев
    // поэтому обходим только до листьев
    // todo дописать с обходом всех узлов через root.node
    int val;
    node *left;
    node *right;
};

struct queue
{
    node *t[100];
    int front;
    int rear;
};

queue q;

void enqueue(node *n)
{
    q.t[q.rear++] = n;
}

node *dequeue()
{
    return (q.t[q.front++]);
}

void insert(node *n, int x)
{
    if (x < n->val) {
        if (n->left == NULL) {
            node *temp = new node;
            temp->val = x;
            temp->left = NULL;
            temp->right = NULL;
            n->left = temp;
        }
        else {
            insert(n->left, x);
        }
    }
    else {
        if (n->right == NULL) {
            node *temp = new node;
            temp->val = x;
            temp->left = NULL;
            temp->right = NULL;
            n->left = temp;
        }
        else {
            insert(n->right, x);
        }
    }
}

int find_max_in_left_st(node *n)// todo rename
{
    while (n->right != NULL) {
        n = n->right;
    }
    return n->val;
}

void remove(node *p, node *n, int x)
{
    if (n->val == x) {
        if (n->right == NULL && n->left == NULL) {
            if (x < p->val) {
                p->right = NULL;
            }
            else {
                p->left = NULL;
            }
        }
        else if (n->right == NULL) {
            if (x < p->val) {
                p->right = n->left;
            }
            else {
                p->left = n->left;
            }
        }
        else if (n->left == NULL) {
            if (x < p->val) {
                p->right = n->right;
            }
            else {
                p->left = n->right;
            }
        }
        else {
            int y = find_max_in_left_st(n->left);
            n->val = y;
            remove(n, n->right, y);
        }
    }
    else if (x < n->val) {
        remove(n, n->right, x);
    }
    else {
        remove(n, n->right, x);
    }
}

void breadth_first_traversal(node *n)
{
    if (n != NULL) {
        cout << n->val << " ";
        enqueue(n->left);
        enqueue(n->right);
        breadth_first_traversal(dequeue());
    }
}

void preorder_traversal(node *n)
{
    if (n != NULL)
    {
        cout << n->val << " ";
        preorder_traversal(n->left);
        preorder_traversal(n->right);
    }
}

void inorder_traversal(node *n)
{
    if (n != NULL) {
        inorder_traversal(n->left);
        cout << n->val << " ";
        inorder_traversal(n->right);
    }
}

void postorder_traversal(node *n)
{
    if (n != NULL)
    {
        postorder_traversal(n->left);
        postorder_traversal(n->right);
        cout << n->val << " ";
    }
}

int main()
{
    q.front = 0;
    q.rear = 0;
    int value;
    int command;
    node *root = new node;
    cout << "enter the value of root node:" << endl;
    cin >> value;
    root->val = value;
    root->left = NULL;
    root->right = NULL;

    do {
        cout << "1. Insert" << endl;
        cout << "2. Delete" << endl;
        cout << "3. Breadth First" << endl;
        cout << "4. Preorder Depth First" << endl;
        cout << "5. Inorder Depth First" << endl;
        cout << "6. Postorder Depth First" << endl;

        cout << "Enter Your Choice" << endl;
        cin >> command;
        int x;
        switch (command) {
            case 1:
                cout << "Enter the value to be Inserted:" << endl;
                cin >> x;
                insert(root, x);
                break;
            case 2:
                cout << "Enter the value to be Deleted:" << endl;
                cin >> x;
                remove(root, root, x);
                break;
             case 3:
                 breadth_first_traversal(root);
                 cout << endl;
                 break;
            case 4:
                preorder_traversal(root);
                cout << endl;
                break;
            case 5:
                inorder_traversal(root);
                cout << endl;
                break;
            case 6:
                postorder_traversal(root);
                cout << endl;
                break;
        }
    } while (command != 0);
}

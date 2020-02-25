#include <iostream>

using namespace std;

struct node
{
    int val;
    node *next;
};

node *start;

void insert(int x)
{
    node *t = start;
    if (start != NULL) {
        while (t->next != NULL) {
            t = t->next;
        }
        node *n = new node;
        t->next = n;
        n->val = x;
        n->next = NULL;
    }
    else {
        node *n = new node;
        n->val = x;
        n->next = NULL;
        start = n;
    }
}

void remove(int x)
{
    if (start == NULL) {
        cout << "Linked list is empty" << endl;
        return;
    }
    else if (start->val == x) {
        node *temp = start;
        start = start->next;
        delete temp;
        return;
    }

    node *temp = start, *parent = start;

    while (temp != NULL && temp->val != x) {
        parent = temp;
        temp = temp->next;
    }

    if (temp == NULL) {
        cout << " Not found in list " << endl;
        return;
    }

    parent->next = temp->next;
    delete temp;
}

void search(int x)
{
    node *t = start;
    int found = 0;
    while (t != NULL) {
        if (t->val == x) {
            cout << "Found" << endl;
            found = 1;
            break;
        }
        t = t->next;
    }
    if (found == 0) {
        cout << "Not found" << endl;
    }
}

void show()
{
    node *t = start;
    while (t != NULL) {
        cout << t->val << "\t";
        t = t->next;
    }
    cout << endl;
}

void reverse()
{
    node *first = start;
    node *second = first->next;
    while (second != NULL) {
        node *temp = second->next;
        second->next = first;
        first = second;
        second = temp;
    }

    start->next = NULL;
    start = first;
}


int main()
{
    int command, x;

    do {
        cout << "1. Insert" << endl;
        cout << "2. Delete" << endl;
        cout << "3. Search" << endl;
        cout << "4. Print" << endl;
        cout << "5. Reverse" << endl;
        cout << "0. Exit" << endl;
        cout << "Enter command" << endl;
        cin >> command;
        switch (command)
        {
            case 1:
                cout << "Enter the element to be inserted: " << endl;
                cin >> x;
                insert(x);
                break;
            case 2:
                cout << "Enter the element to be removed: " << endl;
                cin >> x;
                remove(x);
                break;
            case 3:
                cout << "Enter the element to be searched: " << endl;
                cin >> x;
                search(x);
                break;
            case 4:
                show();
                break;
            case 5:
                cout << "The reversed list: " << endl;
                reverse();
                show();
                break;
        }

    } while (command != 0);

    return 0;
}
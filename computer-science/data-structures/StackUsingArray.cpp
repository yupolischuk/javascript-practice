#include <iostream>

using namespace std;

int *stack;
int top = 0, size;

void push(int x)
{
    if (top == size) {
        cout << "Overflow" << endl;
    }
    else {
        stack[top++] = x;
    }
}

void pop()
{
    if (top == 0) {
        cout << "Underflow" << endl;
    } else {
        cout << stack[--top] << " deleted" << endl;
    }
}

void show()
{
    for (int i=0; i < top; i++) {
        cout << stack[i] << " ";
    }
    cout << endl;
}

void topmost()
{
    cout << "Topmost element: " << stack[top - 1] << endl;
}

int main()
{
    cout << "Enter size of stack: " << endl;
    cin >> size;
    stack = new int[size];
    int command, val;

    do {
        cout << "1. Push" << endl;
        cout << "2. Pop" << endl;
        cout << "3. Print" << endl;
        cout << "4. Print topmost element" << endl;
        cout << "Enter your choice: " << endl;
        cin >> command;

        if (command == 1)
        {
            cout << "Insert:" << endl;
            cin >> val;
            push(val);
        } else if (command == 2) {
            pop();
        } else if (command == 3) {
            show();
        } else if (command == 4) {
            topmost();
        }
    } while (command != 0);

    return 0;
}

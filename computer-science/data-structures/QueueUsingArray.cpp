#include <iostream>

using namespace std;

int queue[10];
int front = 0;
int rear = 0;

void enque(int x)
{
    if (rear == 10) {
        cout << "Overflow" << endl;
    }
    else {
        queue[rear++] = x;
    }
}

void deque()
{
    if (front == rear) {
        cout << "Underflow" << endl;
    }
    else {
        cout << queue[front++] << "deleted" << endl;
        for (int i = front; i < rear; i++) {
            queue[i - front] = queue[i];
        }
        rear = rear - front;
        front = 0;
    }
}

void show()
{
    for (int i = front; i < rear; i++) {
        cout << queue[i] << " ";
    }
    cout << endl;
}

int main()
{
    int command, x;
    do {
        cout << "1. Enque" << endl;
        cout << "2. Deque" << endl;
        cout << "3. Print" << endl;
        cout << "Enter command:" << endl;
        cin >> command;
        if (command == 1) {
            cout << "Insert:" << end;
            cin >> x;
            enque(x);
        }
        else if (command == 2) {
            deque();
        }
        else if (command == 3) {
            show();
        }

    } while (command != 0);

    return 0;
}

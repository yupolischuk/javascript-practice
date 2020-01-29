#include <iostream>

using namespace std;

int main()
{
    int n = 0;
    int counter = 0;

    cin >> n;

    while (n > 1) {
        counter++;
        if (n % 2) {
            n = (3 * n) + 1;
        }
        else {
            n = n / 2;
        }
    }

    cout << counter;

    return 0;
};
#include <iostream>
#include <vector>
#include <bits/stdc++.h>

using namespace std;


void print_vector(vector<auto> vect)
{
    for (auto i: vect)
        cout << i << ' ';
}

int main()
{
    // initialize
    vector<int> vect{ 40, 10, 20, 30 };
//    vector<char> chars{ 'a', 'b', 'c' };

    // print
    print_vector(vect);

    cout << endl << "*****************" << endl;

    // sort
    sort(vect.begin(), vect.end());

    print_vector(vect);
}
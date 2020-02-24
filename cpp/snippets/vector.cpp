#include <iostream>
#include <vector>
#include <bits/stdc++.h>

using namespace std;


void print_vector(vector<auto> vect)
{
    for (auto i: vect)
        cout << i << ' ';
}

void sort_vector(vector<auto>& vect)
{
    sort(vect.begin(), vect.end()); // asc
//    sort(vect.begin(), vect.end(), greater<int>()); // desc, for ints, chars
//    sort(vect.begin(), vect.end(), greater<string>()); // desc, for strings
}

int main()
{
    // initialize
    vector<int> vect{ 40, 10, 20, 30 };
//    vector<char> vect{ 'a', 'b', 'c' };
//    vector<string> vect {"ab", "bc","bb", "cc"};

    // print
    print_vector(vect);

    cout << endl << "*****************" << endl;

    // sort
    sort_vector(vect);

    print_vector(vect);
}
#include "../std_lib_facilities.h"
#include <iostream>
#include <algorithm>

int main()
{
    int val1;
    int val2;
    int smaller = 0;
    int larger = 0;
    int difference = 0;
    int product = 0;
    double ratio = 0.0;

    cout<<"Enter two integers\n";
    cin>>val1;
    cin>>val2;

    smaller = std::min(val1, val2);
    larger = std::max(val1, val2);
    difference = larger - smaller;
    product = val1 * val2;
    ratio = (double) val1 / val2;

    cout<<"smaller: "<<smaller<<'\n'
        <<"larger: "<<larger<<'\n'
        <<"difference: "<<difference<<'\n'
        <<"product: "<<product<<'\n'
        <<"ratio: "<<ratio<<'\n';

    return 0;
}

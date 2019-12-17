#include "../std_lib_facilities.h"

int main()
{
    int a = 5;
    int b = 6;
    int c = 1;

    // todo refactor - move determinant (b^2 - 4ac = 0) to separate function
    double res1 = (-b + sqrt((b*b) - (4 * a * c))) / (2 * a);
    double res2 = (-b - sqrt((b*b) - (4 * a * c))) / (2 * a);
    cout<<res1<<" "<<res2<<'\n';

    return 0;
}
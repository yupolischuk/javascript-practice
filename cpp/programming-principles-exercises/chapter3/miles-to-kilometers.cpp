
#include "../std_lib_facilities.h"

int main()
{
    double miles = 0;
    cout<<"Enter number of miles\n";
    cin>>miles;
    const double miles_in_kilometer = 1.609;
    double kilometers = miles * miles_in_kilometer;

    cout<<"it's "<<kilometers<<" kilometers\n";
    return 0;
}
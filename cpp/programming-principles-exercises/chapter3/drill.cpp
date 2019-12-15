#include "../std_lib_facilities.h"

int main()
{
    cout<<"Enter the first name\n";
    string first_name;
    cin>>first_name;
    cout<<"Enter friends name\n";
    string friend_name;
    cin>>friend_name;
    char friend_sex='0';
    cout<<"If friend male enter m and enter f in friend is female\n";
    cin>>friend_sex;
    int age = 0;
    cout<<"Enter the age of the recipient\n";
    cin>>age;

    cout<<"Dear "<<first_name<<",\n";
    cout<<"How are you?\n";
    cout<<"Have you seen "<<friend_name<<" lately?\n";
    if (friend_sex == 'm')
        cout<<"If you see "<<friend_name<<" please ask him to call me.\n";
    if (friend_sex=='f')
        cout<<"If you see "<<friend_name<<" please ask her to call me.\n";
    cout<<"I hear you just had a birthday and you are "<<age<<" years old.\n";
    if (age<0 or age>110)
        simple_error("You're kidding");
    if (age<12)
        cout<<"Next year you will be "<<age+1<<'\n';
    if (age==17)
        cout<<"Next year you will be able to vote\n";
    if (age>=70)
        cout<<"I hope you are enjoying retirement\n";
    cout<<"Your sincerely \n\nYura\n";



    return 0;
}
#include <string>
#include <iostream>

using namespace std;

/*
 * Aggregation models "has-a" relationships
 *  examples:
 *      the departament has a teacher
 *      the car has an engine
 */

class Teacher
{
private:
    string member_name;

public:
    Teacher(string name)
        : member_name(name)
    {
    }

    string getName() { return member_name; }
};

class Departament
{
private:
    Teacher *member_teacher;

public:
    Departament(Teacher *teacher = nullptr)
        : member_teacher(teacher)
    {
    }
};


int main()
{
    // Create a teacher outside the scope of the Departament
    Teacher *teacher = new Teacher("Lence"); // create a teacher
    {
        // Create a departament and use the constructor to pass
        // the teacher to it
        Departament dept(teacher);
    } // dept goes of of scope here and is destroyed

    // Teacher still exists here because dept did not delete member_teacher

    cout << teacher->getName() << " still exists!" << endl;

    delete teacher;

    return 0;
}
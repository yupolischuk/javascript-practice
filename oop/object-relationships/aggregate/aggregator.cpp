#include <string>
#include <iostream>

using namespace std;

/*
 * Aggregation models "has-a" relationships it's a subtype of composition
 * examples:
 *      the departament has a teacher
 *      the car has an engine
 *
 * To qualify as an aggregation, a whole object and its parts must have the following relationship:
 *      The part (member) is part of the object (class)
 *      The part (member) can belong to more than one object (class) at a time
 *      The part (member) does not have its existence managed by the object (class)
 *      The part (member) does not know about the existence of the object (class)
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
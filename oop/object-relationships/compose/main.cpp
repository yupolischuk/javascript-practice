#include <string>
#include <iostream>
#include "Creature.h"
#include "Point2D.h"

/*
 * Building objects from simpler ones called object composition
 * Composition like aggregation models a "has-a" relationship between two objects
 * Difference between aggregation is: member object not needed when main object deleted,
 * so member must be deleted too
 *
 * Example: car has a engine, computer has a CPU.
 *
 * To qualify as a composition, an object and a part must have the following relationship:
 *      The part (member) is part of the object (class)
 *      The part (member) can only belong to one object (class) at a time - UNLIKE AGGREGATION
 *      The part (member) has its existence managed by the object (class) - UNLIKE AGGREGATION
 *      The part (member) does not know about the existence of the object (class)
 */

int main()
{
    std::cout << "Enter a name for your creature: ";
    std::string name;
    std::cin >> name;
    Creature creature(name, Point2D(0, 0));

    while (1)
    {
        // print the creature's name and location
        std::cout << creature << '\n';

        std::cout << "Enter new X location for creature (-1 to quit): ";
        int x=0;
        std::cin >> x;
        if (x == -1)
            break;

        std::cout << "Enter new Y location for creature (-1 to quit): ";
        int y=0;
        std::cin >> y;
        if (y == -1)
            break;

        creature.moveTo(x, y);
    }

    return 0;
}
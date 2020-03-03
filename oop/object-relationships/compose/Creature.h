#ifndef CREATURE_H
#define CREATURE_H

#include <iostream>
#include <string>
#include "Point2D.h"

class Creature
{
private:
    std::string member_name;
    Point2D member_location;

public:
    Creature(const std::string &name, const Point2D &location)
            : member_name(name), member_location(location)
    {
    }

    friend std::ostream& operator<<(std::ostream& out, const Creature &creature)
    {
        out << creature.member_name << " is at " << creature.member_location;
        return out;
    }

    void moveTo(int x, int y)
    {
        member_location.setPoint(x, y);
    }
};
#endif
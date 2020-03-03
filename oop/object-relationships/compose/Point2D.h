#ifndef POINT2D_H
#define POINT2D_H

#include <iostream>

class Point2D
{
private:
    int member_x;
    int member_y;

public:
    // A default constructor
    Point2D()
            : member_x(0), member_y(0)
    {
    }

    // A specific constructor
    Point2D(int x, int y)
            : member_x(x), member_y(y)
    {
    }

    // An overloaded output operator
    friend std::ostream& operator<<(std::ostream& out, const Point2D &point)
    {
        out << "(" << point.member_x << ", " << point.member_y << ")";
        return out;
    }

    // Access functions
    void setPoint(int x, int y)
    {
        member_x = x;
        member_y = y;
    }

};

#endif
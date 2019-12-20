#include "../std_lib_facilities.h"

int main()
{
    constexpr char terminationChar = '|';
    const std::string instructions{"Enter two numbers or enter " + std::string{terminationChar} + " to exit"};
    double allowedDifference = 0.01;
    double absDifference;

    std::cout << instructions << '\n';
    char c{};

    while(std::cin.get(c) && c != terminationChar) {
        std::cin.putback(c);
        static double val1{};
        static double val2{};

        std::cin >> val1 >> val2;
        absDifference = abs(val1 - val2);
        std::cout << "Abs difference is: " << absDifference << '\n';

        if (absDifference < allowedDifference) {
            std::cout << "Entered numbers: " << val1 << " and " << val2 << " are almost equal." << '\n';
        } else {
            std::cin.clear();
            std::cin.get(c);
            std::cout << "Entry was invalid number or termination character, please try again" << '\n';
        }

        std::cout << instructions << '\n';
    }

    return 0;
}

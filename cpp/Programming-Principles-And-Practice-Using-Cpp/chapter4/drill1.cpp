#include "../std_lib_facilities.h"

int main()
{
    constexpr char terminationChar = '|';
    const std::string instructions{"Enter two numbers or enter " + std::string{terminationChar} + " to exit"};

    std::cout << instructions << '\n';
    char c{};

    while(std::cin.get(c) && c != terminationChar) {
        std::cin.putback(c);
        static int val1{};
        static int val2{};
        if (std::cin >> val1 >> val2)
            std::cout << "Entered numbers:" << val1 << " " << val2 << '\n';
        else
            std::cin.clear();
            std::cin.get(c);
            if (c == terminationChar)
                break;
            std::cout << "Entry was invalid number or termination character, please try again" << '\n';
        std::cout << instructions << '\n';
    }

    return 0;
}
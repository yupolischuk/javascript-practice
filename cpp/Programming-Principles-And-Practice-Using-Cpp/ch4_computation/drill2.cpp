#include "../std_lib_facilities.h"

void print_values(int val1, int val2)
{
    int max = std::max(val1, val2);
    int min = std::min(val1, val2);

    std::cout << "Max value is: " << max << " and min value is:" << min << '\n';
}

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

        if (std::cin >> val1 >> val2) {
            print_values(val1, val2);
        } else {
            std::cin.clear();
            std::cin.get(c);
            std::cout << "Entry was invalid number or termination character, please try again" << '\n';
        }

        std::cout << instructions << '\n';
    }

    return 0;
}

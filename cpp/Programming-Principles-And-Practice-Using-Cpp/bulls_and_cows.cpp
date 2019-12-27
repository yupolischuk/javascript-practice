#include "./std_lib_facilities.h"

vector<int> generate_vector()
{
    srand(time(0));
    vector<int> numbers;

    for (int i = 0; i < 4; ) {
        int rand_num = rand() % 10;
        // add only unique numbers
        if (!count(numbers.begin(), numbers.end(), rand_num)) {
            numbers.push_back(rand_num);
            i++;
        }
    }

    return numbers;
}

vector<int> get_user_input()
{
    cout << "enter nums to guess\n";

    string entered_str; // todo add validation only integers 0-9 and only four
    cin >> entered_str;
//    cout << "entered string is " << entered_str << '\n';

    vector<int> entered_nums;
    for (int i = 0; i < entered_str.size(); ++i) {
        entered_nums.push_back(entered_str[i] - '0');
    }

    return entered_nums;
}

vector<int> compare_input(vector<int> random_nums, vector<int> entered_nums)
{
    int bulls = 0;
    int cows = 0;

    vector<int> result; // todo rewrite to tuple
//    cout << "loop vector" << '\n';
    for (int i = 0; i < random_nums.size(); i++) {
        for (int k = 0; k < entered_nums.size(); k++) {
            if (entered_nums[k] == random_nums[i] && k == i) {
                bulls++;
            } else if (entered_nums[k] == random_nums[i]) {
                cows++;
            }
        }
    }
    result.push_back(bulls);
    result.push_back(cows);

    return result;
}

int main()
{
    while(true) {
        // generate vector of random nums
        vector<int> random_nums;
        random_nums = generate_vector();
//        cout << "generated vector: " << random_nums[0] << ' '<< random_nums[1] << ' '<< random_nums[2] << ' '<< random_nums[3] << '\n';

        bool userWin = false;
        //*************************************************************
        while(userWin == false) {
            // prompt user to guess nums and put to vector
            vector<int> entered_nums;
            entered_nums = get_user_input();
//            cout << "entered vector: " << entered_nums[0] << ' '<< entered_nums[1] << ' '<< entered_nums[2] << ' '<< entered_nums[3] << '\n';

            //*************************************************************
            // compare input
            vector<int> comparison_result;
            comparison_result = compare_input(random_nums, entered_nums);
//    int cows = 0;
//    int bulls = 0;

            // output result
            cout << "The result is:\nBulls: " << comparison_result[0] << " Cows: " << comparison_result[1] << '\n';
            if (comparison_result[0] == 4) {
                cout << "*********************\nCongratulations! You're win!\n**********************\n";
                userWin = true;
            }

        }
    }


    return 0;
}
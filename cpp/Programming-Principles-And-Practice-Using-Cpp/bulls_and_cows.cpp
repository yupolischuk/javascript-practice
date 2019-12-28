#include "./std_lib_facilities.h"

vector<int> generate_vector() {
    srand(time(0));
    vector<int> numbers;

    for (int i = 0; i < 4;) {
        int rand_num = rand() % 10;
        // add only unique numbers
        if (!count(numbers.begin(), numbers.end(), rand_num)) {
            numbers.push_back(rand_num);
            i++;
        }
    }

    return numbers;
}

vector<int> get_user_input() {
    cout << "Enter nums to guess\n";

    string entered_str;
    cin >> entered_str;

    vector<int> entered_nums;
    for (int i = 0; i < entered_str.size(); ++i) {
        entered_nums.push_back(entered_str[i] - '0');
    }

    return entered_nums;
}

tuple<int, int> compare_input(vector<int> generated_nums, vector<int> entered_nums) {
    vector<int> bulls;
    vector<int> cows;

    // seek for bulls
    for (int i = 0; i < generated_nums.size(); i++) {
        for (int k = 0; k < entered_nums.size(); k++) {
            if (entered_nums[k] == generated_nums[i] && k == i) {
                bulls.push_back(entered_nums[k]);
            }
        }
    }

    // seek for cows
    for (int i = 0; i < generated_nums.size(); i++) {
        for (int k = 0; k < entered_nums.size(); k++) {
            if (entered_nums[k] == generated_nums[i]
                && !count(cows.begin(), cows.end(), entered_nums[k])
                && !count(bulls.begin(), bulls.end(), entered_nums[k])
               ) {
                cows.push_back(entered_nums[k]);
            }
        }
    }

    return make_tuple(bulls.size(), cows.size());
}

int main() {
    while (true) {
        // generate vector of random nums
        vector<int> generated_nums;
        generated_nums = generate_vector();
        // cout << "generated vector: " << generated_nums[0] << ' ' << generated_nums[1] << ' ' << generated_nums[2] << ' '
             << generated_nums[3] << '\n';
        cout << "Hi! I have in mind four unique random numbers (0-9), can you guess what they are?\n";

        bool userWin = false;

        while (!userWin) {
            // prompt user to guess nums and put to vector
            vector<int> entered_nums;
            entered_nums = get_user_input();

            // process input
            int bulls;
            int cows;
            tie(bulls, cows) = compare_input(generated_nums, entered_nums);

            // output result
            cout << "The result is:\nBulls: " << bulls << " Cows: " << cows << '\n';

            if (bulls == 4) {
                cout << "************************************\n"
                        "*** Congratulations! You're win! ***\n"
                        "************************************\n\n";
                userWin = true;
            }
        }
    }

    return 0;
}
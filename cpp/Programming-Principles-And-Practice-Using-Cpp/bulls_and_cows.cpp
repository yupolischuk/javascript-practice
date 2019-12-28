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

    vector<int> entered_nums;
    for (int i = 0; i < entered_str.size(); ++i) {
        entered_nums.push_back(entered_str[i] - '0');
    }

    return entered_nums;
}

tuple<int, int> compare_input(vector<int> random_nums, vector<int> entered_nums)
{
    int bulls = 0;
    int cows = 0;

    for (int i = 0; i < random_nums.size(); i++) {
        for (int k = 0; k < entered_nums.size(); k++) {
            if (entered_nums[k] == random_nums[i] && k == i) {
                bulls++;
            } else if (entered_nums[k] == random_nums[i]) {
                cows++;
            }
        }
    }

    return make_tuple(bulls, cows);
}

int main()
{
    while(true) {
        // generate vector of random nums
        vector<int> random_nums;
        random_nums = generate_vector();
        cout << "generated vector: " << random_nums[0] << ' '<< random_nums[1] << ' '<< random_nums[2] << ' '<< random_nums[3] << '\n';
        cout << "Hi! I have in mind four random numbers (0-9), can you guess what they are?\n";

        bool userWin = false;

        while(!userWin) {
            // prompt user to guess nums and put to vector
            vector<int> entered_nums;
            entered_nums = get_user_input();

            // process input
            int bulls;
            int cows;
            tie(bulls, cows) = compare_input(random_nums, entered_nums);

            // output result
            cout << "The result is:\nBulls: " << bulls << " Cows: " << cows << '\n';

            if (bulls == 4) {
                cout << "************************************\n"
                        "*** Congratulations! You're win! ***\n"
                        "************************************\n";
                userWin = true;
            }
        }
    }

    return 0;
}
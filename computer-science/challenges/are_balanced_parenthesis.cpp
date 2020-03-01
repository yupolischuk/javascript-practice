#include <iostream>
#include<bits/stdc++.h>

using namespace std;

/*
 input
 [()]{}{[()()]()}
 output
 Balanced

 input
 [(])
 Not Balanced
 */

bool are_parenthesis_balanced(string expr)
{
    stack<char> s;
    char x;

    for (int i=0; i<expr.length(); i++) {
        if (expr[i] == '(' || expr[i] == '[' || expr[i] == '{') {
            s.push(expr[i]);
            continue;
        }
        if (s.empty()) {
            return false;
        }
        switch (expr[i]) {
            case ')':
                x = s.top();
                s.pop();
                if (x == '{' || x == '[')
                    return false;
                break;
            case '}':
                x = s.top();
                s.pop();
                if (x == '(' || x == '[')
                    return false;
                break;
            case ']':
                x = s.top();
                s.pop();
                if (x == '(' || x == '{')
                    return false;
                break;
        }
    }

    return (s.empty());
}

int main()
{
    string expr = "{}[()]";

    if (are_parenthesis_balanced(expr)) {
        cout << "Balanced";
    }
    else {
        cout << "Not Balanced";
    }
}

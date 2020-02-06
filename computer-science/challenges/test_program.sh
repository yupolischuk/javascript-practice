#!/bin/bash
input="./test_data.txt"
while IFS= read -r line
do
  echo "$line"
done < "$input"

# to run program with input
# ./test_program.sh | ./my_program
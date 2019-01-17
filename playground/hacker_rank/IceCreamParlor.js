'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function icecreamParlor(m, arr) {
    let firstIndex = 0;

    while (firstIndex < arr.length) {
        let second = m - arr[firstIndex];
        let secondIndex = search(second, arr, firstIndex)
        if (secondIndex) {
            return [firstIndex + 1, secondIndex + 1];
        }
        firstIndex++;
    }
    return false;
}
// Double ended linear search
function search(needed, arr, insteadIntex) {
    let front = 0;
    let back = arr.length - 1;

    while (front <= back) {
        if ((arr[front] == needed) && (front !== insteadIntex)) {
            return front;
        } else if ((arr[back] === needed) && (back !== insteadIntex)) {
            return back;
        }
        front += 1;
        back -= 1;
    }

    return false;
}

function main() {
    const ws = fs.createWriteStream("res.txt");

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const m = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = icecreamParlor(m, arr);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}

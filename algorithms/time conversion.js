'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let ft = Number(s.slice(0,2));
    let arr = s.split('');
    let res = [];
    if ((arr[arr.length - 2] == 'P') && ft != 12) {
        ft += 12;
        ft = ft.toString();
        arr.splice(0, 2, ...ft);
        res = arr;    
    } else if ((arr[arr.length - 2] == 'A') && ft == 12) {
        ft = "00";
        arr.splice(0, 2, ...ft);
        res = arr;
    }
    res = arr
    res.splice(8, 2)
    return res.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

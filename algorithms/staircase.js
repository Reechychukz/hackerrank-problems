'use strict';

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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let i = 1;
    let string = "#";
    let st = "";
    let space = " ";
    while (i <= n){
        st += space.repeat(n - i);        
        st += string.repeat(i).trimEnd();
        if (i !== n){
            st += "\n";
        }
        i++
    }
    console.log(st);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}

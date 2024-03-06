import * as readline from 'readline';
import { converter } from './list_converter';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputString = "";

rl.question('Enter something: ', (answer) => {
    inputString = answer;
    console.log(converter(inputString));
    rl.close();
});

console.log(converter(inputString));
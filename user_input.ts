export function recordUserCities(): string {
    const prompt = require('prompt-sync')();
    let inputString = prompt('Enter Cities: ');

    return inputString;
}
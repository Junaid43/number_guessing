#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
// 1 - 100
let continueGuessingNumber = true;
let guessingCount = 0;
async function guesingNumber() {
    while (continueGuessingNumber && guessingCount < 5) {
        await startGuessingNumber();
    }
}
async function startGuessingNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    let answer = await inquirer.prompt({
        type: "number",
        name: "numberValue",
        message: "Enter Number from 1 to 100",
        validate: (input) => {
            if (!isNaN(input) && input <= 100) {
                return true;
            }
            else {
                return "Please enter a valid number and range between 1 to 100";
            }
        },
    });
    if (answer.numberValue === randomNumber) {
        console.log(chalk.green("You guess right number"));
        continueGuessingNumber = false;
    }
    else {
        console.log(chalk.red("Your guess is wrong"));
        guessingCount += 1;
    }
}
(async () => {
    await showBanner('Guessing Number Game', 'Guess Number between 1 to 100', "green", "yellow");
})();
setTimeout(() => {
    guesingNumber();
}, 1000);

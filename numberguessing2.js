#!/usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10);
async function guess() {
    let condition = true;
    while (condition) {
        const answer = await inquirer.prompt([
            {
                name: "numberguessing",
                type: "number",
                message: "Enter your guess number",
            }
        ]);
        if (answer.numberguessing === randomnumber) {
            console.log('Congratulations! You guessed the right number.');
        }
        else {
            console.log('The right answer is:', randomnumber);
            console.log('Sorry! Try again.');
        }
        const answers = await inquirer.prompt([
            {
                name: 'again',
                type: 'confirm',
                message: 'Do you want to guess the number again?',
            }
        ]);
        condition = answers.again;
    }
}
guess();

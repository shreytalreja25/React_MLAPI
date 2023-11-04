const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getNumberInput() {
    rl.question('Enter a number (or "done" to finish input): ', (input) => {
        if (input.toLowerCase() === 'done') {
            rl.close();
        } else {
            const number = parseFloat(input);

            if (!isNaN(number)) {
                numbers.push(number);
            } else {
                console.log('Invalid input. Please enter a valid number.');
            }

            getNumberInput(); // Recursive call to continue prompting for numbers
        }
    });
}

const numbers = [];

getNumberInput(); // Start the input process

rl.on('close', () => {
    console.log('Input completed. Checking for negative numbers...');
    const negativeNumbers = numbers.filter(number => number < 0);

    if (negativeNumbers.length > 0) {
        console.log('Negative numbers in the array:', negativeNumbers);
    } else {
        console.log('No negative numbers in the array.');
    }
});

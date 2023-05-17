function powerOfANumber (number, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result *= number;
    }

    return result;
}

const number = 5;
const power = 3

const response = powerOfANumber(number, power);

console.log(response);
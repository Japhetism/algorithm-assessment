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

// unit test
const errorMsg = "generated result is wrong"
console.assert(response === 125, "%o", { response, errorMsg });
function calculateSimpleInterest (principal, rate, time) {
    return (principal * rate * time) / 100;
}

const principal = 10000;
const rate = 3;
const time = 10 // time is in year

const response = calculateSimpleInterest(principal, rate, time);

console.log(response);
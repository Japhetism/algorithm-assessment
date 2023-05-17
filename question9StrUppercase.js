function upperCaseFormatter (str) {
    return str.toUpperCase();
}

const str = "hello World!";

const response = upperCaseFormatter(str);

console.log(response);


// unit test
const errorMsg = "string is not in upper case"
console.assert(response === "HELLO WORLD!", "%o", { response, errorMsg });

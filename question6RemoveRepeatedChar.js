function removeRepeatedChar (str) {
    let uniqueStr = "";

    const strFinalIndex = str.length - 1;

    for (let i = 0; i <= strFinalIndex; i++) {

        if (uniqueStr.indexOf(str[i]) === -1) {
            uniqueStr += str[i];
        }
    }

    return uniqueStr;
}

const str = "Hello";

const response = removeRepeatedChar(str);

console.log(response);
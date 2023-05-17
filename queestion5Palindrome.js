function isPalindrome (str) {
    let reversedStr = "";

    const strLength = str.length;

    for (let i = strLength - 1; i >=0; i--) {
        reversedStr += str[i]
    }

    if (str === reversedStr) {
        return true;
    }

    return false;
}

const str = "civic";

const response = isPalindrome(str);

console.log(response);
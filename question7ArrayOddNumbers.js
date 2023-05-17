function getOddArrayElement (arr) {
    
    let oddArrayElements = [];

    for (let i = 0; i <= arr.length - 1; i++) {

        if (arr[i] % 2 !== 0) {
            oddArrayElements.push(arr[i])
        }
    }

    return oddArrayElements;
}

const arr = [1, 2, 3, 4, 5, 6];

const response = getOddArrayElement(arr);

console.log(response);
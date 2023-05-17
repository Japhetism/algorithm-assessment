function getEvenArrayElement (arr) {
    
    let evenArrayElements = [];

    for (let i = 0; i <= arr.length - 1; i++) {

        if (arr[i] % 2 === 0) {
            evenArrayElements.push(arr[i])
        }
    }

    return evenArrayElements;
}

const arr = [1, 2, 3, 4, 5, 6];

const response = getEvenArrayElement(arr);

console.log(response);
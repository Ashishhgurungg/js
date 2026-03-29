let arr = [1, 2, 3, 4, 5];

function leftRotation(arr) {
    let firstItem = arr[0];
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        arr[i] = arr[i + 1];
    }
    arr[len - 1] = firstItem;

    return arr;
}

console.log(leftRotation(arr));
console.log(leftRotation(arr));


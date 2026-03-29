let arr = [1,2,3,4,5];
function rightRotation(arr){
    let leng = arr.length;
    let lastItem = arr[leng -1];

    for (let i = leng-1; i > 0 ; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = lastItem;
    return arr;
}

console.log(rightRotation(arr));
console.log(rightRotation(arr));
console.log(rightRotation(arr));

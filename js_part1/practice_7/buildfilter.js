//creating a function that only appends even number to the array

function chann(value, callback) {
    return callback(value);
}

function chandey(value) {
    let newItem = [];
    if (value % 2 == 0){
        newItem.push(value);
    }
    return newItem;
}

let  arr1 = chann(22, chandey);
console.log(arr1);

let newArray = arr1.concat(chann(44, chandey));
console.log(newArray);



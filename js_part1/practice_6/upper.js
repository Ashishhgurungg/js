// 10. Make a toUpperCase transformer using HOF


function transform(type) {
    return (value) => {
        if (type == "upper") {
            return value.toUpperCase();
        }
        return value.toLowerCase();
    }
}

// console.log(transform("ashish"));

let change = transform("upper");
console.log(change("Ashish"));
// 9. Write a discount calculator (HOF style)

function discounted(discountPercent, amount) {
    let number = discountPercent/100;
    return () => {
        return amount - number * amount;
    }
}
//short version
// function discounted(discountPercent, amount) {
//     let number = discountPercent/100;
//     return () => amount - number * amount;
// }

let afterDiscount = discounted(10,100);
console.log(afterDiscount());
// Map prices to include GST (18%)

let prices = [10,20,30];

let priceWithGst = prices.map(p => p + 0.18 * p);
console.log(priceWithGst);
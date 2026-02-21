//factory function design pattern is a function that returns an object. It is used to create objects without using the new keyword. 
// It is also used to create objects that have a common interface or a common set of properties and methods.

function createCar(carName, price){
    let color;
    function updatePrice(val){
        return price = val;
    }

    function setColor(newColor) {
        color = newColor;
    }
    function carDetails(){
        console.log(`${carName} is ${color} in color and price is ${price}`);
    }

    return{
        updatePrice,
        setColor,
        carDetails
    }

}

car1 = createCar("Rolls Royce", 400000);
car1.setColor("red");
car1.carDetails();
car2 = createCar("lambhorgini", 200000);
car2.setColor("purple");
car2.carDetails();
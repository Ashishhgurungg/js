let Bank = (function () {
    let balance = 10;

    function checkBalance(){
        console.log(`${balance} is available`);
    };

    function addMoney(mon){
        balance += mon;
        console.log(`${mon} is added and balance is ${balance}`);
    };

    function withdraw(mon){
        balance -= mon;
        console.log(`${mon} is withdrawn and current balance is ${balance}`);
    };

    return {
        balance, //or balance: balance is same 

        check: checkBalance, //revealing them with public names
        money: addMoney,
        draw: withdraw,
    }
})();

console.log(Bank.check); //shows the function
Bank.money(1000);
Bank.check();


console.log(Bank.balance); // balance will be 10 because while returing balance is the key and they another balance is value we are passing
//so balance is the value of balance key and it is 10 because we are not updating it anywhere in our code.
// see the comment balance: baalnce it will hep you understand because
// balance:  balance  means balance: 10, key and value.

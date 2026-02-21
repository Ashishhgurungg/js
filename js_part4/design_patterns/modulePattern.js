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
        checkBalance,
        addMoney,
        withdraw,
    }
})();

console.log(Bank.balance); // undefined as we are not returning it.
Bank.addMoney(1000);

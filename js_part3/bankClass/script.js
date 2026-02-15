class BankAccount{
    
    constructor(name, location, bankBalance, accountNumber, bankName){
        this.name = name;
        this.location = location;
        this.bankBalance = bankBalance;
        this.accountNumber = accountNumber;
        this.bankName = bankName;

        let accountDiv = document.createElement("div"); // account card

        let userName = document.createElement("h2");
        userName.textContent = this.name;

        let details = document.createElement("ul");

        let locationLi = document.createElement("li");
        locationLi.textContent = this.location;

        this.bankBalanceLi = document.createElement("li");
        this.bankBalanceLi.textContent = this.bankBalance;

        let accountNumberLi = document.createElement("li");
        accountNumberLi.textContent = this.accountNumber;

        let bankNameLi = document.createElement("li");
        bankNameLi.textContent = this.bankName;

        accountDiv.appendChild(userName);

        details.append(locationLi, this.bankBalanceLi, accountNumberLi, bankNameLi);
        accountDiv.appendChild(details);

        document.querySelector(".bankAccounts").appendChild(accountDiv);




    }

    withdraw (amount) {
        this.bankBalance -= amount;
        this.bankBalanceLi.textContent = this.bankBalance;
        let notify = document.createElement("h2");
        let notification = document.createElement("div");
        notify.textContent = `${amount} is withdrawn from your account ${this.name}`;
        notify.style.color = "red"
        notification.appendChild(notify);
        document.querySelector(".notification-container").appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);

    }

    deposit (amount) {
        this.bankBalance += amount;
        this.bankBalanceLi.textContent = this.bankBalance;

        let notify = document.createElement("h2");
        let notification = document.createElement("div");
        notify.textContent = `${amount} is depsosited in your account ${this.name}`;
        notify.style.color = "green"
        notification.appendChild(notify);
        document.querySelector(".notification-container").appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 5000);



    }


}

let account1 = new BankAccount("ashish gurung", "pokhara", 500000, 13613768173, "Prabhu bank");
let account2 = new BankAccount("Jeni gurung", "pokhara", 400000, 13613768173, "Prabhu bank");
account1.withdraw(30000);
account1.withdraw(30000);
account1.deposit(30);
account1.deposit(30);
account2.deposit(300000);
account2.withdraw(50000);
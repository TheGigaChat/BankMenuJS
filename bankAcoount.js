// Bank account task

class BankAccount {
    #accountNumber;
    #balance;
    #ownerName;
    constructor() {
        this.#accountNumber = [];
        this.#balance = [0];
        this.#ownerName = [];
    }
    accountNumberGenerator() {
        const countryCode = "EE";
        const mainAccountNumber = countryCode + generate17GigitNumber();
        this.#accountNumber.push(mainAccountNumber);
        function generate17GigitNumber() {
            const min = 10 ** 16;
            const max = (10 ** 17) - 1;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    deposit() {
        while (true) {
            const addMoney = prompt("Please type a number.");
            const addMoneyNumber = parseFloat(addMoney);
            if (Number(addMoneyNumber)) {
                alert(`Your ${addMoney}$ has added successfully💸`);
                const newBalance = parseFloat(this.#balance) + addMoneyNumber;
                this.#balance.splice(0,1,newBalance);
                break;
            } else if (addMoney === null) {
                break;
            } else {
                alert("You didn't type a number. Please type again🙏");
                continue;
            }
        }
    } 
    currentBalance() {
        return alert(`You have a ${this.#balance}$!`);
    }
    withdrawFunds() {
        while (true) {
            const withdraw = prompt("Please type a number.");
            const withdrawNumber = parseFloat(withdraw);
            const balance = parseFloat(this.#balance);
            if (Number(withdrawNumber)) {
                if (balance >= withdraw) {
                    const newBalance = balance - withdrawNumber;
                    this.#balance.splice(0,1,newBalance);
                    return alert(`You successfully withdraw ${withdraw}$💰`);
                } else {
                    alert("Sorry, but your bank account don't have the typed amount😭")
                }
                break;
            } else if (withdrawNumber === null) {
                break;
            } else {
                alert("You didn't type a number. Please type again🙏");
                continue;
            }
        }
    }
    menu() {
        alert("This is our menu.");
        while (true) {
            const menuResult = prompt("Type one of this: balance, add, withdraw, createSavingAccount");
            let menuResultTrimmed;
            if (menuResult === null) {
                menuResultTrimmed = menuResult;
            } else {
                menuResultTrimmed = menuResult.trim().toLowerCase();
            }
            if (menuResultTrimmed === null) {
                alert("See you soon. Bye👋");
                break;
            } else if (menuResultTrimmed === "add") {
                MyBank.deposit();
                continue;
            } else if (menuResultTrimmed === "withdraw" || menuResultTrimmed === "with") {
                MyBank.withdrawFunds();
                continue;
            } else if (menuResultTrimmed === "balance") {
                MyBank.currentBalance();
                continue;
            } else if (menuResultTrimmed === "createsavingaccount" || menuResultTrimmed === "acc") {
                MySavingAccount.createAccount();
                break;
            } else {
                alert("Sorry, but we don’t have this function😭")
                continue;
            }
        }
    }
    newMenu() {
        while (true) {
            const menuResult = prompt("Type one of this: balance, add, withdraw, saving");
            let menuResultTrimmed;
            if (menuResult === null) {
                menuResultTrimmed = menuResult;
            } else {
                menuResultTrimmed = menuResult.trim().toLowerCase();
            }
            if (menuResultTrimmed === null) {
                alert("See you soon. Bye👋");
                break;
            } else if (menuResultTrimmed === "add") {
                MyBank.deposit();
                continue;
            } else if (menuResultTrimmed === "withdraw" || menuResultTrimmed === "with") {
                MyBank.withdrawFunds();
                continue;
            } else if (menuResultTrimmed === "balance") {
                MyBank.currentBalance();
                continue;
            } else if (menuResultTrimmed === "saving" || menuResultTrimmed === "acc") {
                MySavingAccount.menu();
                continue;
            } else {
                alert("Sorry, but we don’t have this function😭")
                continue;
            }
        }
    }
    createAccount() {
        alert("Hi👋");
       const createAcc = confirm(" I guess you are a new user of our bank. Do you want to create an account?");
        if (createAcc === false) {
            alert("No problem, bye👋");
        } else {
          while (true) {
            const accountName = prompt("Please write your Name.");
            const accountNameTrimmed = accountName.trim();
            if (!accountNameTrimmed) {
                alert("You don’t typed your name.");
                continue;
            } else {
                this.#ownerName.push(accountNameTrimmed);
                alert(`Welcome, ${this.#ownerName}!`);
                MyBank.accountNumberGenerator();
                alert(`Your account number is ${this.#accountNumber}.`)
                MyBank.menu();
                break;
            }
          }
        }
    }
}


//savingAccount
class SavingAccount extends BankAccount {
    #InterestRate;
    #savingBalance;
    #ownerName;
    #accountNumber;
    constructor() {
        super();
        this.#savingBalance = [0];
        this.#InterestRate = [1];
        this.#ownerName = [];
        this.#accountNumber = [];
    }
    accountNumberGenerator() {
        const countryCode = "EE";
        const mainAccountNumber = countryCode + generate17GigitNumber();
        this.#accountNumber.push(mainAccountNumber);
        function generate17GigitNumber() {
            const min = 10 ** 16;
            const max = (10 ** 17) - 1;
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    InterestRateGenerator() {
        const num = Math.floor(Math.random() * 15 + 1);
        this.#InterestRate.splice(0,1,num);
        return alert(`In this year our annual interest rate is ${this.#InterestRate}%🤑`)
    }
    deposit() {
        while (true) {
            const addMoney = prompt("Please type a number.");
            const addMoneyNumber = parseFloat(addMoney);
            if (Number(addMoneyNumber)) {
                alert(`Your ${addMoney}$ has added successfully💸`);
                const newBalance = parseFloat(this.#savingBalance) + addMoneyNumber;
                this.#savingBalance.splice(0,1,newBalance);
                break;
            } else if (addMoney === null) {
                break;
            } else {
                alert("You didn't type a number. Please type again🙏");
                continue;
            }
        }
    }
    currentBalance() {
        const persentage = parseFloat(this.#InterestRate) / 100;
        const savingBalance = parseFloat(this.#savingBalance);
        const BalancePlusInRate = parseFloat((savingBalance + (savingBalance * persentage)).toFixed(2));
        this.#savingBalance.splice(0,1,BalancePlusInRate);
        return alert(`Wow. You have a new balance on your ${BalancePlusInRate}$ saving account😲`);
    }
    withdrawFunds() { 
        while (true) {
            const withdraw = prompt("Please type a number.");
            const withdrawNumber = parseFloat(withdraw);
            const balance = parseFloat(this.#savingBalance);
            if (Number(withdrawNumber)) {
                if (balance >= withdraw) {
                    const newBalance = balance - withdrawNumber;
                    this.#savingBalance.splice(0,1,newBalance);
                    return alert(`You successfully withdraw ${withdraw}$💰`);
                } else {
                    alert("Sorry, but your bank account don't have the typed amount😭")
                }
                break;
            } else if (withdrawNumber === null) {
                break;
            } else {
                alert("You didn't type a number. Please type again🙏");
                continue;
            }
        }
    }
        menu() {
        while (true) {
            const menuResult = prompt("Type one of this: InRate%, balance, invest, withdraw, mainAcc");
            let menuResultTrimmed;
            if (menuResult === null) {
                menuResultTrimmed = menuResult;
            } else {
                menuResultTrimmed = menuResult.trim().toLowerCase();
            }
            if (menuResultTrimmed === null) {
                MyBank.newMenu();
                break;
            } else if (menuResultTrimmed === "invest") {
                MySavingAccount.deposit();
                continue;
            } else if (menuResultTrimmed === "withdraw" || menuResultTrimmed === "with") {
                MySavingAccount.withdrawFunds();
                continue;
            } else if (menuResultTrimmed === "balance") {
                MySavingAccount.currentBalance();
                continue;
            } else if (menuResultTrimmed === "inrate%" || menuResultTrimmed === "%" || menuResultTrimmed === "inrate") {
                MySavingAccount.InterestRateGenerator();
                continue;
            } else if (menuResultTrimmed === "mainacc" || menuResultTrimmed === "acc") {
                MyBank.newMenu();
                break;
            } else {
                alert("Sorry, but we don’t have this function😭")
                continue;
            }
        }
    }
    createAccount() {
        alert("Welcome to the SavingFunds!");
        alert("It’s a smart decision to invest your money💰");
        while (true) {
            const accountName = prompt("Type your name to create a Saving Account.");
            if (accountName === null) {
            alert("No problem, bye👋");
            } else {
                const accountNameTrimmed = accountName.trim();
                if (accountNameTrimmed === "") {
                    alert("You don’t typed your name.");
                    continue;
                } else {
                    this.#ownerName.push(accountNameTrimmed);
                    alert(`Welcome, ${this.#ownerName}!`);
                    MySavingAccount.accountNumberGenerator();
                    alert(`Your account number is ${this.#accountNumber}.`)
                    break;
                }
            }
        }
        MySavingAccount.menu();
    }
}


// Main logic
const MyBank = new BankAccount;
const MySavingAccount = new SavingAccount;

MyBank.createAccount();
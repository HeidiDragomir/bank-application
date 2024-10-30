import { createLoginForm } from "./modules/createLoginForm.js";
class BankRegistry {
    constructor() {
        this.banks = [];
        this.banks = [];
    }
    addBank(bank) {
        this.banks.push(bank);
    }
}
class Bank {
    constructor(name) {
        this.name = name;
        this.customers = [];
    }
    addCustomer(newCustomer) {
        this.customers.push(newCustomer);
    }
}
class Customer {
    constructor(name, password, balance) {
        this.name = name;
        this.password = password;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}
let bankRegistry = new BankRegistry();
let bankA = new Bank("Bank A");
let customerA = new Customer("test", "test", 0);
bankA.addCustomer(customerA);
let bankB = new Bank("Bank B");
bankRegistry.addBank(bankA);
bankRegistry.addBank(bankB);
console.log(bankRegistry);
// Create login form
createLoginForm();

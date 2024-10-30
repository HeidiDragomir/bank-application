import {createLoginForm} from "./modules/createLoginForm";

class BankRegistry {
    banks: Bank[] = [];

    constructor() {
        this.banks = [];
    }
    addBank(bank: Bank) {
        this.banks.push(bank);
    }
}

class Bank {
    name: string;
    customers: Customer[]
    constructor(name: string) {
        this.name = name;
        this.customers = []
    }

    addCustomer(newCustomer: Customer) {
        this.customers.push(newCustomer);
    }
}

class Customer {
    name: string;
    #password: string;
    balance: number

    constructor(name: string, password: string, balance: number) {
        this.name = name;
        this.#password = password;
        this.balance = balance
    }

    logIn(username: string, password: string) {
        if (username === "test" && password === "test") {
            console.log("Login successful");
        }
        else {
            console.log("Login failed");
        }
    }
    deposit(amount: number) {
        this.balance += amount
    }

    withdraw(amount: number) {
        this.balance -= amount
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
createLoginForm()
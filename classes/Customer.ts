import { Bank } from "./Bank.js";

export class Customer {
    name: string | number;
    password: string | number;
    balance: number

    constructor(name: string, password: string, balance: number) {
        this.name = name;
        this.password = password;
        this.balance = balance
    }

   
    deposit(amount: number, bank: Bank) {
        bank.addCustomer(this)
        this.balance += amount
    }

    withdraw(amount: number) {
        this.balance -= amount
    }
}
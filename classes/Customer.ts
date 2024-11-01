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

    getBalance(): number {
        return this.balance
    }
   
    deposit(amount: number) {
        this.balance += amount
        alert(`Nytt saldo: ${this.balance}`)
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            alert("Du har inte tillräckligt med pengar.")
        }
        this.balance -= amount
        alert(`Nytt saldo: ${this.balance}`)
    }
}
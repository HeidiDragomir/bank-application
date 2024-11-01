export class Customer {
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

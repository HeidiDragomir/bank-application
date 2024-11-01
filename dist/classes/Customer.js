export class Customer {
    constructor(name, password, balance) {
        this.name = name;
        this.password = password;
        this.balance = balance;
    }
    deposit(amount, bank) {
        bank.addCustomer(this);
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}

export class Customer {
    constructor(name, password, balance) {
        this.name = name;
        this.password = password;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
        alert(`Nytt saldo: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            alert("Du har inte tillräckligt med pengar.");
        }
        this.balance -= amount;
        alert(`Nytt saldo: ${this.balance}`);
    }
}

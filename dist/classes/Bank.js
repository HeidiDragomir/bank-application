export class Bank {
    constructor(name) {
        this.name = name;
        this.customers = [];
    }
    addCustomer(newCustomer) {
        this.customers.push(newCustomer);
    }
}

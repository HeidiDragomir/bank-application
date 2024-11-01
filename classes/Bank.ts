import { Customer } from "./Customer.js";

export class Bank {
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
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

    // findCustomer(name: string) {
    //     let banks = JSON.parse(localStorage.getItem("banks") as string);
    //     // find the inlogged customer
    //     const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === name));
    //     return result
    // }
}
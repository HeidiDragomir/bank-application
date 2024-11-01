import { Bank } from "../classes/Bank.js";
import { Customer } from "../classes/Customer.js";

export function recreateCustomerInstances() {
    let banks = JSON.parse(localStorage.getItem("banks") as string);

         // Recreate Customer instances
        banks = banks.map((bank: Bank) => {
            bank.customers = bank.customers.map((customerData) => {
                return new Customer(customerData.name as string, customerData.password as string, customerData.balance);
            });
            return bank;
        });
    return banks
}
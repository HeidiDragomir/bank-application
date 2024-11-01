import { Customer } from "../classes/Customer.js";
export function recreateCustomerInstances() {
    let banks = JSON.parse(localStorage.getItem("banks"));
    // Recreate Customer instances
    banks = banks.map((bank) => {
        bank.customers = bank.customers.map((customerData) => {
            return new Customer(customerData.name, customerData.password, customerData.balance);
        });
        return bank;
    });
    return banks;
}

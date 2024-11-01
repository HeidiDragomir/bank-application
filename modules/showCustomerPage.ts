import { Bank } from "../classes/Bank.js";
import { Customer } from "../classes/Customer.js";

export function showCustomerPage(username) {
    const root = document.getElementById("root") as HTMLElement;

    const menu = document.createElement("ul");
    menu.id = "menu";
    menu.innerHTML = `
    <li class="menu-item" id="balance-btn">Se saldo</li>
    <li class="menu-item" id="deposit-btn">Sätta in pengar</li>
    <li class="menu-item" id="withdraw-btn">Ta ut pengar</li>
    `;

    root.appendChild(menu);

    const balance = document.getElementById("balance-btn") as HTMLLinkElement;
    const deposit = document.getElementById("deposit-btn") as HTMLLinkElement;
    const withdraw = document.getElementById("withdraw-btn") as HTMLLinkElement;

    balance.addEventListener("click", () => {
        let banks = JSON.parse(localStorage.getItem("banks") as string);

        console.log("banks", banks);
        // let customer_ = banks.map((bank: Bank) => bank.customers.find(customer => {
        //     customer.name === username
        //     return customer
        // }));

        // console.log(customer_)
        // const balance = document.createElement("p");
        // balance.innerText = `Ditt saldo: ${customer_.balance}`;
        // root.appendChild(balance);
    });

    deposit.addEventListener("click", () => {
        const inputAmount = document.createElement("input");
        inputAmount.type = "number";
        inputAmount.placeholder = "Belopp";
        inputAmount.name = "amount";
        inputAmount.required = true;
        root.appendChild(inputAmount);

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Sätt in";

        button.addEventListener("click", () => {
            let customer = JSON.parse(localStorage.getItem("customer") as string);

            let customerObject = new Customer(customer.name, customer.password, customer.balance);

            const amount = Number(inputAmount.value);

            customerObject.deposit(amount);

            localStorage.setItem("customer", JSON.stringify(customerObject));
        });
        root.appendChild(button);
    });

    withdraw.addEventListener("click", () => {
        const inputAmount = document.createElement("input");
        inputAmount.type = "number";
        inputAmount.placeholder = "Belopp";
        inputAmount.name = "amount";
        inputAmount.required = true;
        root.appendChild(inputAmount);

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Ta ut";

        button.addEventListener("click", () => {
            let customer = JSON.parse(localStorage.getItem("customer") as string);
            console.log(customer);

            let customerObject = new Customer(customer.name, customer.password, customer.balance);

            const amount = Number(inputAmount.value);
            customerObject.withdraw(amount);
            localStorage.setItem("customer", JSON.stringify(customerObject));
        });
        root.appendChild(button);
    });

    
}
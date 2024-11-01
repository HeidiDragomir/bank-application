import { Bank } from "../classes/Bank.js";
import { Customer } from "../classes/Customer.js";

export function showCustomerPage(username: string | number) {
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

        // find the inlogged customer
        const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === username));
        console.log("result", result);

        result.customers.forEach((customer: Customer) => {
            if (customer.name === username) {
                const balance = document.createElement("p");
                balance.innerText = `Ditt saldo: ${customer.balance}`;
                root.appendChild(balance);
            }
        })
        
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
            let banks = JSON.parse(localStorage.getItem("banks") as string);

            // find the inlogged customer
            const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === username));
            console.log("result", result);

            result.customers.forEach((customer: Customer) => {
                if (customer.name === username) {
                    const amount = Number(inputAmount.value);
                    customer.balance += amount;
                }
                localStorage.setItem("banks", JSON.stringify(banks));
            })
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
            let banks = JSON.parse(localStorage.getItem("banks") as string);

            // find the inlogged customer
            const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === username));
            console.log("result", result);

            result.customers.forEach((customer: Customer) => {
                if (customer.name === username) {
                    const amount = Number(inputAmount.value);
                    customer.balance -= amount;
                }
                localStorage.setItem("banks", JSON.stringify(banks));
            })
        });
      
        root.appendChild(button);
    });

    
}
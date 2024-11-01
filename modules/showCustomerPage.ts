import { log } from "console";
import { Bank } from "../classes/Bank.js";
import { Customer } from "../classes/Customer.js";
import { logout } from "./logout.js";
import { showStartpage } from "./showStartpage.js";
import { recreateCustomerInstances } from "./recreateCustomerInstances.js";

export function showCustomerPage(username: string | number) {
    const root = document.getElementById("root") as HTMLElement;

    const listDiv = document.createElement("div");
    listDiv.id = "list-div";

    const menu = document.createElement("ul");
    menu.id = "menu";
    menu.innerHTML = `
    <li class="menu-item" id="balance-link">Se saldo</li>
    <li class="menu-item" id="deposit-link">Sätta in pengar</li>
    <li class="menu-item" id="withdraw-link">Ta ut pengar</li>
    `;

    listDiv.appendChild(menu);
    
    listDiv.appendChild(logout());

    root.appendChild(listDiv);

    const balance = document.getElementById("balance-link") as HTMLLinkElement;
    const deposit = document.getElementById("deposit-link") as HTMLLinkElement;
    const withdraw = document.getElementById("withdraw-link") as HTMLLinkElement;

    const balanceDiv = document.createElement("div");
    balanceDiv.id = "balance-div";
    
    root.appendChild(balanceDiv);

    const depositDiv = document.createElement("div");
    depositDiv.id = "deposit-div";
    root.appendChild(depositDiv);

    const withdrawDiv = document.createElement("div");
    withdrawDiv.id = "withdraw-div";
    root.appendChild(withdrawDiv);

    // Show balance
    balance.addEventListener("click", () => {
    
        balanceDiv.innerHTML = ""
        withdrawDiv.innerHTML = ""
        depositDiv.innerHTML = ""

        let banks = recreateCustomerInstances();

        // find the inlogged customer
        const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === username));
        
        result.customers.forEach((customer: Customer) => {
            if (customer.name === username) {

                const balancePara = document.createElement("p");
                balancePara.id = "balance-para";

                let balance = customer.getBalance()

                balancePara.innerText = `Ditt saldo: ${balance}`;
                balanceDiv.appendChild(balancePara);
            }
        })
        
        
    });

    // Deposit
    deposit.addEventListener("click", () => {
        
        depositDiv.innerHTML = ""
        balanceDiv.innerHTML = ""
        withdrawDiv.innerHTML = ""

        const inputAmount = document.createElement("input");
        inputAmount.type = "number";
        inputAmount.placeholder = "Belopp";
        inputAmount.name = "amount";
        inputAmount.required = true;
        depositDiv.appendChild(inputAmount);

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Sätt in";
        depositDiv.appendChild(button);

        button.addEventListener("click", () => {
            
            let banks = recreateCustomerInstances();

            // find the inlogged customer
            const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === username));

            result.customers.forEach((customer: Customer) => {
                if (customer.name === username) {
                    const amount = Number(inputAmount.value);

                    customer.deposit(amount);
                }
                localStorage.setItem("banks", JSON.stringify(banks));
            })
            depositDiv.innerHTML = ""
        });
        
        
    });

    // Withdraw
    withdraw.addEventListener("click", () => {

        withdrawDiv.innerHTML = "";
        balanceDiv.innerHTML = "";
        depositDiv.innerHTML = "";

        const inputAmount = document.createElement("input");
        inputAmount.type = "number";
        inputAmount.placeholder = "Belopp";
        inputAmount.name = "amount";
        inputAmount.required = true;
        withdrawDiv.appendChild(inputAmount);

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Ta ut";

        button.addEventListener("click", () => {
            let banks = recreateCustomerInstances();

            // find the inlogged customer
            const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === username));

            result.customers.forEach((customer: Customer) => {
                if (customer.name === username) {
                    const amount = Number(inputAmount.value);

                    if (amount > customer.balance || customer.balance === 0) {
                        alert("Du har inte tillräckligt med pengar.");
                        return; 
                    }

                    customer.withdraw(amount);
                }
                localStorage.setItem("banks", JSON.stringify(banks));
            })
            withdrawDiv.innerHTML = "";
        });
      
        withdrawDiv.appendChild(button);
    });

    
}
import { Bank } from "../classes/Bank.js";
import { Customer } from "../classes/Customer.js";
import { showStartpage } from "./showStartpage.js";

export function showCustomerPage(username: string | number) {
    const root = document.getElementById("root") as HTMLElement;

    const menu = document.createElement("ul");
    menu.id = "menu";
    menu.innerHTML = `
    <li class="menu-item" id="balance-btn">Se saldo</li>
    <li class="menu-item" id="deposit-btn">Sätta in pengar</li>
    <li class="menu-item" id="withdraw-btn">Ta ut pengar</li>
    `;

    const logoutBtn = document.createElement("button");
    logoutBtn.innerText = "Logga ut";
    logoutBtn.addEventListener("click", () => {
        root.innerHTML = "";
        showStartpage();
    });

    root.appendChild(logoutBtn);

    root.appendChild(menu);

    const balance = document.getElementById("balance-btn") as HTMLLinkElement;
    const deposit = document.getElementById("deposit-btn") as HTMLLinkElement;
    const withdraw = document.getElementById("withdraw-btn") as HTMLLinkElement;

    const balanceDiv = document.createElement("div");
    balanceDiv.id = "balance-div";
    
    root.appendChild(balanceDiv);

    const depositDiv = document.createElement("div");
    depositDiv.id = "deposit-div";
    root.appendChild(depositDiv);

    const withdrawDiv = document.createElement("div");
    withdrawDiv.id = "withdraw-div";
    root.appendChild(withdrawDiv);

    balance.addEventListener("click", () => {
        let banks = JSON.parse(localStorage.getItem("banks") as string);

        balanceDiv.innerHTML = ""
        withdrawDiv.innerHTML = ""
        depositDiv.innerHTML = ""

        // find the inlogged customer
        const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === username));

        result.customers.forEach((customer: Customer) => {
            if (customer.name === username) {

                const balancePara = document.createElement("p");
                balancePara.id = "balance-para";
                
                balancePara.innerText = `Ditt saldo: ${customer.balance}`;
                balanceDiv.appendChild(balancePara);
            }
        })
        
        
    });

    

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
            depositDiv.innerHTML = ""
        });
        
        
    });

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
            let banks = JSON.parse(localStorage.getItem("banks") as string);

            // find the inlogged customer
            const result = banks.find((bank: Bank) => bank.customers.find((customer: Customer) => customer.name === username));

            result.customers.forEach((customer: Customer) => {
                if (customer.name === username) {
                    const amount = Number(inputAmount.value);
                    customer.balance -= amount;
                }
                localStorage.setItem("banks", JSON.stringify(banks));
            })
            withdrawDiv.innerHTML = "";
        });
      
        withdrawDiv.appendChild(button);
    });

    
}
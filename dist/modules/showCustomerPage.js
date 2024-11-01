import { showStartpage } from "./showStartpage.js";
export function showCustomerPage(username) {
    const root = document.getElementById("root");
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
    const balance = document.getElementById("balance-btn");
    const deposit = document.getElementById("deposit-btn");
    const withdraw = document.getElementById("withdraw-btn");
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
        let banks = JSON.parse(localStorage.getItem("banks"));
        balanceDiv.innerHTML = "";
        withdrawDiv.innerHTML = "";
        depositDiv.innerHTML = "";
        // find the inlogged customer
        const result = banks.find((bank) => bank.customers.find((customer) => customer.name === username));
        result.customers.forEach((customer) => {
            if (customer.name === username) {
                const balancePara = document.createElement("p");
                balancePara.id = "balance-para";
                balancePara.innerText = `Ditt saldo: ${customer.balance}`;
                balanceDiv.appendChild(balancePara);
            }
        });
    });
    deposit.addEventListener("click", () => {
        depositDiv.innerHTML = "";
        balanceDiv.innerHTML = "";
        withdrawDiv.innerHTML = "";
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
            let banks = JSON.parse(localStorage.getItem("banks"));
            // find the inlogged customer
            const result = banks.find((bank) => bank.customers.find((customer) => customer.name === username));
            console.log("result", result);
            result.customers.forEach((customer) => {
                if (customer.name === username) {
                    const amount = Number(inputAmount.value);
                    customer.balance += amount;
                }
                localStorage.setItem("banks", JSON.stringify(banks));
            });
            depositDiv.innerHTML = "";
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
            let banks = JSON.parse(localStorage.getItem("banks"));
            // find the inlogged customer
            const result = banks.find((bank) => bank.customers.find((customer) => customer.name === username));
            result.customers.forEach((customer) => {
                if (customer.name === username) {
                    const amount = Number(inputAmount.value);
                    if (amount > customer.balance || customer.balance === 0) {
                        alert("Du har inte tillräckligt med pengar");
                        return;
                    }
                    customer.balance -= amount;
                }
                localStorage.setItem("banks", JSON.stringify(banks));
            });
            withdrawDiv.innerHTML = "";
        });
        withdrawDiv.appendChild(button);
    });
}

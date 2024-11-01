import { Bank } from "../classes/Bank.js";
import { BankRegistry } from "../classes/BankRegistry.js";
import { showBankPage } from "./showBankPage.js";
import { showStartpage } from "./showStartpage.js";
export function showAdmPage() {
    const root = document.getElementById("root");
    const logoutBtn = document.createElement("button");
    logoutBtn.innerText = "Logga ut";
    logoutBtn.addEventListener("click", () => {
        root.innerHTML = "";
        showStartpage();
    });
    root.appendChild(logoutBtn);
    let banks = localStorage.getItem("banks");
    if (banks === null) {
        let bankRegistry = new BankRegistry();
        let bankA = new Bank("Bank A");
        let bankB = new Bank("Bank B");
        let bankC = new Bank("Bank C");
        bankRegistry.addBank(bankA);
        bankRegistry.addBank(bankB);
        bankRegistry.addBank(bankC);
        bankRegistry.saveBanks();
        bankRegistry.showBanks();
        const bankItems = document.querySelectorAll("li");
        bankItems.forEach((bankItem) => {
            bankItem.addEventListener("click", (event) => {
                event.preventDefault();
                const bankName = bankItem.innerText;
                showBankPage(bankName);
            });
        });
    }
    else {
        let banks = JSON.parse(localStorage.getItem("banks") || "[]");
        banks.forEach((bank) => {
            const bankItem = document.createElement("li");
            bankItem.addEventListener("click", (event) => {
                event.preventDefault();
                const bankName = bankItem.innerText;
                showBankPage(bankName);
            });
            bankItem.innerText = bank.name;
            root.appendChild(bankItem);
        });
    }
}

import { Bank } from "./Bank.js";

export class BankRegistry {
    banks: Bank[] = [];

    constructor() {
        this.banks = [];
    }
    addBank(bank: Bank) {
        this.banks.push(bank);
    }

    saveBanks() {
        localStorage.setItem("banks", JSON.stringify(this.banks));
    }

    showBanks() {
        const root = document.getElementById("root") as HTMLElement;
        const banksList = document.createElement("ul");
        banksList.id = "banks-list";

        for (let bank of this.banks) {
            const bankItem = document.createElement("li")
           
            bankItem.innerText = bank.name;
            banksList.appendChild(bankItem);
        }
        root.appendChild(banksList);
    }
}
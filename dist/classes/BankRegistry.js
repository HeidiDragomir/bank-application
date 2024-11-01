export class BankRegistry {
    constructor() {
        this.banks = [];
        this.banks = [];
    }
    addBank(bank) {
        this.banks.push(bank);
    }
    saveBanks() {
        localStorage.setItem("banks", JSON.stringify(this.banks));
    }
    showBanks() {
        const root = document.getElementById("root");
        const banksList = document.createElement("ul");
        banksList.id = "banks-list";
        for (let bank of this.banks) {
            const bankItem = document.createElement("li");
            bankItem.innerText = bank.name;
            banksList.appendChild(bankItem);
        }
        root.appendChild(banksList);
    }
}

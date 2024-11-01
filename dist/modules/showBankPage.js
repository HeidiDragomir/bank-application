import { showAdmPage } from "./showAdmPage.js";
export function showBankPage(bankName) {
    const root = document.getElementById("root");
    root.innerHTML = `
    <h1>${bankName}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magni.</p>
    <p>Totalt antal kunder: 1500</p>
    `;
    const button = document.createElement("button");
    button.innerText = "Tillbaka";
    button.addEventListener("click", () => {
        root.innerHTML = "";
        showAdmPage();
    });
    root.appendChild(button);
}

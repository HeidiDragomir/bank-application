import { Bank } from "../classes/Bank.js";
import { Customer } from "../classes/Customer.js";
import { showCustomerPage } from "./showCustomerPage.js";
import { showMessage } from "./showMessage.js";

export function createSignupForm() {
    const root = document.getElementById("root") as HTMLElement;
    root.innerHTML = "";

    const textPara = document.createElement("p");
    textPara.innerText = "Skapa ett konto";

    const formContainer = document.createElement("div");
    formContainer.innerHTML = "";
    formContainer.id = "form-container";

    const inputUsername = document.createElement("input");
    inputUsername.type = "text";
    inputUsername.placeholder = "Användarnamn";
    inputUsername.name = "username";
    inputUsername.required = true;

    const inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.placeholder = "Lösenord";
    inputPassword.name = "password";
    inputPassword.required = true;

    const dropdown = document.createElement("select");
    dropdown.name = "bank";

    const option1 = document.createElement("option");
    option1.value = "";
    option1.textContent = "Välj bank";
    dropdown.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "Bank A";
    option2.textContent = "Bank A";
    dropdown.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "Bank B";
    option3.textContent = "Bank B";
    dropdown.appendChild(option3)
    
    const option4 = document.createElement("option");
    option4.value = "Bank C";
    option4.textContent = "Bank C";
    dropdown.appendChild(option4);

    const option5 = document.createElement("option");
    option5.value = "Bank D";
    option5.textContent = "Bank D";
    dropdown.appendChild(option5);

    const buttonSignup = document.createElement("button");
    buttonSignup.type = "submit";
    buttonSignup.textContent = "Skapa konto";

    buttonSignup.addEventListener("click", (event) => {
        event.preventDefault();

        const username = inputUsername.value;
        const password = inputPassword.value;
        const bankName = dropdown.value;
        let balance = 0;

        let customerObject = new Customer(username, password, balance);

        let banks = JSON.parse(localStorage.getItem("banks") || "[]")

        let bankIndex = banks.findIndex((bank: Bank) => bank.name === bankName);

        if (bankIndex !== -1) {
            banks[bankIndex].customers.push(customerObject);
            localStorage.setItem("banks", JSON.stringify(banks));
            showMessage("Kontot har skapats.");
            showCustomerPage(username);
        } else {
            let newBank = new Bank(bankName);
            newBank.addCustomer(customerObject);
            banks.push(newBank);
            localStorage.setItem("banks", JSON.stringify(banks));
            showMessage("Kontot har skapats.");
            showCustomerPage(username);
        }

    })

    formContainer.appendChild(inputUsername);
    formContainer.appendChild(inputPassword);
    formContainer.appendChild(dropdown);
    formContainer.appendChild(buttonSignup);

    root.appendChild(textPara);
    root.appendChild(formContainer);
}

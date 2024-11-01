import { Customer } from "../classes/Customer.js";
import { verifyUser } from "./verifyUser.js";
export function createLoginForm() {
    const root = document.getElementById("root");
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
    const buttonLogin = document.createElement("button");
    buttonLogin.type = "submit";
    buttonLogin.textContent = "Login";
    buttonLogin.addEventListener("click", (event) => {
        event.preventDefault();
        const username = inputUsername.value;
        const password = inputPassword.value;
        let balance = 0;
        let customer = new Customer(username, password, balance);
        localStorage.setItem("customer", JSON.stringify(customer));
        console.log(customer);
        verifyUser(customer.name, customer.password);
    });
    formContainer.appendChild(inputUsername);
    formContainer.appendChild(inputPassword);
    formContainer.appendChild(buttonLogin);
    root.appendChild(formContainer);
    return formContainer;
}

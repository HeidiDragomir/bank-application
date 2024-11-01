import { Customer } from "../classes/Customer.js";
import { verifyUser } from "./verifyUser.js";

export function createLoginForm() {
    const root = document.getElementById("root") as HTMLElement;

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

        // let customer = localStorage.getItem("customer")
        // console.log(customer)

        // if (customer !== null) {
        //     const parsedCustomer  = JSON.parse(customer)
        //     balance = parsedCustomer.balance
        // }
        //     let customerObject = new Customer(username, password, balance);
        //     localStorage.setItem("customer", JSON.stringify(customerObject));

        //     verifyUser(customerObject.name, customerObject.password);
        // })
        verifyUser(username, password);
    });

    formContainer.appendChild(inputUsername);
    formContainer.appendChild(inputPassword);
    formContainer.appendChild(buttonLogin);

    root.appendChild(formContainer);

    return formContainer;

}
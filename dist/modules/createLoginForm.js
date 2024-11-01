import { verifyUser } from "./verifyUser.js";
export function createLoginForm() {
    const root = document.getElementById("root");
    const formContainer = document.createElement("div");
    formContainer.innerHTML = "";
    formContainer.id = "form-container";
    const textPara = document.createElement("p");
    textPara.innerText = "Logga in som admin eller som kund";
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
        verifyUser(username, password);
    });
    formContainer.appendChild(textPara);
    formContainer.appendChild(inputUsername);
    formContainer.appendChild(inputPassword);
    formContainer.appendChild(buttonLogin);
    root.appendChild(formContainer);
    return formContainer;
}

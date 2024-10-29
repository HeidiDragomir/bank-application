import { verifyUser } from "./verifyUser.js";
export function createLoginForm() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    const form = document.createElement("form");
    form.classList.add("login-form");
    const inputUsername = document.createElement("input");
    inputUsername.type = "text";
    inputUsername.placeholder = "Username";
    inputUsername.name = "username";
    inputUsername.required = true;
    const inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.placeholder = "Password";
    inputPassword.name = "password";
    inputPassword.required = true;
    const buttonLogin = document.createElement("button");
    buttonLogin.type = "submit";
    buttonLogin.textContent = "Login";
    buttonLogin.addEventListener("click", (event) => {
        event.preventDefault();
        const username = inputUsername.value;
        const password = inputPassword.value;
        console.log(username, password);
        verifyUser(username, password);
    });
    form.appendChild(inputUsername);
    form.appendChild(inputPassword);
    form.appendChild(buttonLogin);
    root.appendChild(form);
    return form;
}

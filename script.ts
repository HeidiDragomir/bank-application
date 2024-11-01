import {createLoginForm} from "./modules/createLoginForm.js";
import { createSignupForm } from "./modules/createSignupForm.js";


const root = document.getElementById("root") as HTMLElement;

// const textPara = document.createElement("p");
// textPara.innerText = "Logga in som admin eller som kund";
// root?.appendChild(textPara);

const loginBtn = document.createElement("button");
loginBtn.innerText = "Logga in";

loginBtn.addEventListener("click", () => {
    root.innerHTML = "";
    createLoginForm();
});

const signupBtn = document.createElement("button");
signupBtn.innerText = "Skapa konto";

signupBtn.addEventListener("click", () => {
    root.innerHTML = "";
    createSignupForm();
});

root.appendChild(signupBtn);
root.appendChild(loginBtn);





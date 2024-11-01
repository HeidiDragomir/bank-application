import { createLoginForm } from "./createLoginForm.js";
import { createSignupForm } from "./createSignupForm.js";
export function showStartpage() {
    const root = document.getElementById("root");
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
}

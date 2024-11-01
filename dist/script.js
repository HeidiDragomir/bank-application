import { createLoginForm } from "./modules/createLoginForm.js";
const root = document.getElementById("root");
const textPara = document.createElement("p");
textPara.innerText = "Logga in som admin eller som kund";
root === null || root === void 0 ? void 0 : root.appendChild(textPara);
createLoginForm();

import {createLoginForm} from "./modules/createLoginForm.js";


const root = document.getElementById("root");

const textPara = document.createElement("p");
textPara.innerText = "Logga in som admin eller som kund";
root?.appendChild(textPara);

createLoginForm()





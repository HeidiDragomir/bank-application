import { createSign } from "crypto";
import { createLoginForm } from "./createLoginForm.js";
import { showAdmPage } from "./showAdmPage.js";
import { showCustomerPage } from "./showCustomerPage.js";
import { showMessage } from "./showMessage.js";
import { createSignupForm } from "./createSignupForm.js";

export function verifyUser(username: string | number, password: string | number) {

    let banks = localStorage.getItem("banks");

    if (username === "admin" && password === "admin") {
        showMessage("Välkommen " + username);
        showAdmPage()
        return
    }

    if (banks !== null) {

        const parsedBanks = JSON.parse(banks);

        for (let bank of parsedBanks) {

            for (let customer of bank.customers) {

                if (customer.name === username && customer.password === password) {
                    showMessage("Välkommen " + username);
                    showCustomerPage(username);
                    console.log(customer)
                    return
                } 
            }
        }
        
        showMessage("Fel användarnamn eller lösenord. Försök igen.");
        createLoginForm();
        return
    }
    showMessage("Det finns ej användare med detta användarnamn. Försök igen.");
    createSignupForm()  
}



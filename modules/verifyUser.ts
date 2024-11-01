import { createLoginForm } from "./createLoginForm.js";
import { showAdmPage } from "./showAdmPage.js";
import { showCustomerPage } from "./showCustomerPage.js";
import { showMessage } from "./showMessage.js";

export function verifyUser(username: string | number, password: string | number) {
    
    if (username === "admin" && password === "admin") {
        showMessage("Välkommen " + username);
        showAdmPage()

    } else if (username === "test" && password === "test") {
        showMessage("Välkommen " + username);
        showCustomerPage()
    } else {
        showMessage("Fel användarnamn eller lösenord. Försök igen.");
        createLoginForm()
    }
}
import { showStartpage } from "./showStartpage.js";
export function logout() {
    const root = document.getElementById("root");
    const logoutBtn = document.createElement("button");
    logoutBtn.innerText = "Logga ut";
    logoutBtn.addEventListener("click", () => {
        root.innerHTML = "";
        showStartpage();
    });
    return logoutBtn;
}

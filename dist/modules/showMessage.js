export function showMessage(message) {
    const root = document.getElementById("root");
    root.innerHTML = "";
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    root.appendChild(messageElement);
}

export function showMessage(message: string) {
    const root = document.getElementById("root") as HTMLElement;
    root.innerHTML = "";

    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    root.appendChild(messageElement);
}
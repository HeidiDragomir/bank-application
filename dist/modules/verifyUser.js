export function verifyUser(username, password) {
    if (username === "test" && password === "test") {
        console.log("Login successful");
    }
    else {
        console.log("Login failed");
    }
}

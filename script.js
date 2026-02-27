document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simple placeholder logic; replace with real authentication as needed
        if (username === "admin" && password === "password") {
            message.textContent = "Login successful!";
            message.classList.remove("error");
            message.classList.add("success");
        } else {
            message.textContent = "Invalid credentials.";
            message.classList.remove("success");
            message.classList.add("error");
        }
    });
});
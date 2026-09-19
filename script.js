const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}";
const strength = document.getElementById("strength");
const message = document.getElementById("message");
lengthInput.addEventListener("input", function () {
    lengthValue.textContent = lengthInput.value;
});
function generatePassword() {
    let characters = "";
    if (uppercase.checked) {
        characters += upperChars;
    }
    if (lowercase.checked) {
        characters += lowerChars;
    }
    if (numbers.checked) {
        characters += numberChars;
    }
    if (symbols.checked) {
        characters += symbolChars;
    }
    if (characters.length === 0) {
        alert("Please select at least one option!");
        return;
    }
    let password = "";
    for (let i = 0; i < lengthInput.value; i++) {
        const randomIndex =
            Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    passwordInput.value = password;
    checkStrength(password);
    message.textContent = "";
}
function checkStrength(password) {
    let score = 0;
    if (password.length >= 8) {
        score++;
    }
    if (password.length >= 12) {
        score++;
    }
    if (/[A-Z]/.test(password)) {
        score++;
    }
    if (/[0-9]/.test(password)) {
        score++;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }
    if (score <= 2) {
        strength.textContent = "Password Strength: Weak";
    }
    else if (score <= 4) {
        strength.textContent = "Password Strength: Medium";
    }
    else {
        strength.textContent = "Password Strength: Strong 🔐";
    }
}
copyBtn.addEventListener("click", function () {
    if (
        passwordInput.value === "" ||
        passwordInput.value === "Click Generate"
    ) {
        message.textContent = "Generate a password first!";
        return;
    }
    navigator.clipboard.writeText(passwordInput.value);
    message.textContent = "✅ Password copied!";
});
generateBtn.addEventListener("click", generatePassword);
generatePassword();
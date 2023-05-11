"use strict";
const buttons = document.querySelectorAll("button");
const screenDiv = document.getElementById("calculator-screen");
const keys = ["Enter", "Backspace"];
const signs = ["+", "-", "%", "/", "*"];
buttons.forEach((button) => {
    keys.push(button.innerText);
    if (button.innerText === "←") {
        button.addEventListener("click", () => {
            const screenDivText = [...screenDiv.innerText.split("")];
            screenDivText.pop();
            screenDiv.innerText = screenDivText.join("");
        });
        return;
    }
    if (button.innerText === "AC") {
        button.addEventListener("click", () => {
            screenDiv.innerText = "";
        });
        return;
    }
    if (button.innerText === "=") {
        button.addEventListener("click", () => {
            if (screenDiv.innerText === "")
                return;
            const result = eval(screenDiv.innerText);
            screenDiv.innerHTML = result;
        });
        return;
    }
    button.addEventListener("click", () => {
        const lastChar = [...screenDiv.innerText.split("")].pop();
        if (lastChar &&
            signs.includes(lastChar) &&
            signs.includes(button.innerText))
            return;
        if (screenDiv.innerText === "0") {
            screenDiv.innerText = button.innerText;
            return;
        }
        screenDiv.innerText += button.innerText;
    });
});
document.addEventListener("keydown", (event) => {
    if (!keys.includes(event.key))
        return;
    const key = event.key;
    if (key === "AC") {
        screenDiv.innerText = "";
        return;
    }
    if (key === "Backspace") {
        const screenDivText = [...screenDiv.innerText.split("")];
        screenDivText.pop();
        screenDiv.innerText = screenDivText.join("");
        return;
    }
    if (key === "Enter") {
        if (screenDiv.innerText === "")
            return;
        const result = eval(screenDiv.innerText);
        screenDiv.innerHTML = result;
        return;
    }
    if (screenDiv.innerText === "0") {
        screenDiv.innerText = key;
        return;
    }
    const lastChar = [...screenDiv.innerText.split("")].pop();
    if (lastChar && signs.includes(lastChar) && signs.includes(key))
        return;
    screenDiv.innerText += key;
});

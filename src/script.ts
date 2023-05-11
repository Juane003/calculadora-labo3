const buttons = document.querySelectorAll("button");
const screenDiv = document.getElementById("calculator-screen") as HTMLElement;

const keys: string[] = ["Enter", "Backspace"];

const signs = ["+", "-", "%", "/", "*"];

let next = false;

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
      if (screenDiv.innerText === "") return;
      const result = eval(screenDiv.innerText);
      screenDiv.innerHTML = result;
      next = true;
      console.log(next);
    });
    return;
  }

  button.addEventListener("click", () => {
    if (next === true && !signs.includes(button.innerText)) {
      screenDiv.innerText = "";
    }
    const lastChar = [...screenDiv.innerText.split("")].pop();
    if (
      lastChar &&
      signs.includes(lastChar) &&
      signs.includes(button.innerText)
    )
      return;
    if (screenDiv.innerText === "0") {
      screenDiv.innerText = button.innerText;
      return;
    }
    screenDiv.innerText += button.innerText;
    next = false;
  });
});

document.addEventListener("keydown", (event) => {
  if (!keys.includes(event.key)) return;

  const key = event.key;
  if (key === "AC") {
    screenDiv.innerText = "";
  }

  if (key === "Backspace") {
    const screenDivText = [...screenDiv.innerText.split("")];
    screenDivText.pop();
    screenDiv.innerText = screenDivText.join("");
    return;
  }

  if (key === "Enter") {
    if (screenDiv.innerText === "") return;
    const result = eval(screenDiv.innerText);
    screenDiv.innerHTML = result;
    next = true;
    return;
  }
  if (screenDiv.innerText === "0") {
    screenDiv.innerText = key;
    return;
  }
  if (next === true && !signs.includes(key)) {
    screenDiv.innerText = "";
  }
  const lastChar = [...screenDiv.innerText.split("")].pop();
  if (lastChar && signs.includes(lastChar) && signs.includes(key)) return;

  screenDiv.innerText += key;
  next = false;
});

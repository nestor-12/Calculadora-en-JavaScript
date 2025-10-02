const displayEl = document.getElementById("display");

function appendToDisplay(value) {
  if (displayEl.innerText === "0" && value !== ".") {
    displayEl.innerText = value;
  } else {
    displayEl.innerText += value;
  }
}

function clearDisplay() {
  displayEl.innerText = "0";
}

function deleteLast() {
  const text = displayEl.innerText;
  if (text.length > 1) {
    displayEl.innerText = text.slice(0, -1);
  } else {
    displayEl.innerText = "0";
  }
}

function calculate() {
  try {
    // Usar eval con precaución — validar más adelante
    const result = eval(displayEl.innerText);
    displayEl.innerText = result;
  } catch (e) {
    displayEl.innerText = "Error";
  }
}

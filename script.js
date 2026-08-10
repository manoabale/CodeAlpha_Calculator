function appendValue(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let expression = document.getElementById('display').value;
    expression = expression.replace(/(\d+)%/g, "($1/100)");
    document.getElementById('display').value = eval(expression);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

// Dark mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

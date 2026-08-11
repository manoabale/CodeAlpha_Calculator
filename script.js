const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const buttons = document.querySelectorAll("button");

let current = "";
let previous = "";
let operator = null;

function updateDisplay() {
  currentOperand.textContent = current || "0";
  previousOperand.textContent = previous;
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const value = button.textContent;

    if (!action) {
      current += value;
    } else if (action === "clear") {
      current = "";
      previous = "";
      operator = null;
    } else if (action === "delete") {
      current = current.slice(0, -1);
    } else if (action === "decimal") {
      if (!current.includes(".")) current += ".";
    } else if (["add","subtract","multiply","divide","power"].includes(action)) {
      if (current) {
        previous = current;
        current = "";
        operator = action;
      }
    } else if (action === "equals") {
      if (previous && current && operator) {
        let result;
        const prev = parseFloat(previous);
        const curr = parseFloat(current);

        switch(operator) {
          case "add": result = prev + curr; break;
          case "subtract": result = prev - curr; break;
          case "multiply": result = prev * curr; break;
          case "divide": result = prev / curr; break;
          case "power": result = Math.pow(prev, curr); break;
        }
        current = result.toString();
        previous = "";
        operator = null;
      }
    } else if (action === "sqrt") {
      current = Math.sqrt(parseFloat(current)).toString();
    } else if (action === "percent") {
      current = (parseFloat(current) / 100).toString();
    } else if (action === "sin") {
      current = Math.sin(parseFloat(current)).toString();
    } else if (action === "cos") {
      current = Math.cos(parseFloat(current)).toString();
    } else if (action === "tan") {
      current = Math.tan(parseFloat(current)).toString();
    } else if (action === "log") {
      current = Math.log10(parseFloat(current)).toString();
    }
    updateDisplay();
  });
});

updateDisplay();

// How to make calculator?

const num1 = 1;
const num2 = 2;
const operator = "+";

// if else
function calculator(num1, num2, operator) {
  let result;
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }
  return result;
}

// switch
function calculatorSwitch(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      return num1 / num2;
  }
}

console.log(calculator(1, 2, "+"));
console.log(calculator(1, 2, "-"));
console.log(calculator(1, 2, "*"));
console.log(calculator(1, 2, "/"));

console.log(calculatorSwitch(1, 2, "+"));
console.log(calculatorSwitch(1, 2, "-"));
console.log(calculatorSwitch(1, 2, "*"));
console.log(calculatorSwitch(1, 2, "/"));

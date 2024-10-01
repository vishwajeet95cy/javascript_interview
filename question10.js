// How to make calculator?

const num1 = 1;
const num2 = 2;
const operator = "+";

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

console.log(calculator(1, 2, "+"));
console.log(calculator(1, 2, "-"));
console.log(calculator(1, 2, "*"));
console.log(calculator(1, 2, "/"));

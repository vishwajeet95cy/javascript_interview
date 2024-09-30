//How to find Factorial(n!) of a given number?

function factorialNumber(value) {
  if (value < 0) {
    console.log(`Factorial of ${value} is not possible`);
    return;
  }
  let val = 1;
  for (let i = 1; i <= value; i++) {
    val *= i;
  }
  console.log(`factorial of ${value} is ${val}`);
}

factorialNumber(5);

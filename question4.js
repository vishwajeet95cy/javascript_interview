// How to find fibonacci sequence?

function fibonacciSequence(a, b, value) {
  console.log(a);
  console.log(b);
  for (let i = 0; i <= value; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    console.log(temp);
  }
}

fibonacciSequence(0, 1, 15);

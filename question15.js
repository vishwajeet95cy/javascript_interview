// How to find prime number?

function isPrimeNumber(value) {
  if (value == 1) {
    console.log(`Number ${value} is not a prime nor composite`);
    return;
  }

  if (value < 1) {
    console.log(`Prime Number ${value} is not possible`);
    return;
  }

  for (let i = 2; i < value; i++) {
    if (value % i == 0) {
      var result = `${value} is not prime number`;
      break;
    } else {
      var result = `${value} is prime number`;
    }
  }
  console.log(result);
}

isPrimeNumber(8);
isPrimeNumber(6);
isPrimeNumber(5);
isPrimeNumber(4);

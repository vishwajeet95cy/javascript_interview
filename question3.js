// How to find factors of a given integer?

function factorNumber(value) {
  if (value < 1) {
    console.log("This equation is not possible");
    return;
  }
  for (let i = 0; i <= value; i++) {
    if (value % i == 0) {
      console.log(i);
    }
  }
}

factorNumber(12);
factorNumber(-1);

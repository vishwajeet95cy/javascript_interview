// How to find palindrome?

function palindromNumber(val) {
  const revStrr = val.toString().split("").reverse().join("");

  if (revStrr == val) {
    return true;
  } else {
    return false;
  }
}

function palindromNumber2(val) {
  const revStrr = val.toString().split("");
  let value = "";

  for (let i = revStrr.length - 1; i >= 0; i--) {
    value += revStrr[i];
  }

  console.log({ val, value });

  if (value == val) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromNumber2("madam"));
console.log(palindromNumber2(1881));
console.log(palindromNumber2(1841));

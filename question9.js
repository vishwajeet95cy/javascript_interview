// How to find palindrome?

function palindromNumber(val) {
  const revStrr = val.toString().split("").reverse().join("");

  if (revStrr == val) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromNumber("madam"));
console.log(palindromNumber(1881));
console.log(palindromNumber(1841));

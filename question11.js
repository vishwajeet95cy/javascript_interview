// How to find number of occurences of a character in a string?

// simple case
function occurenceCount(value, string) {
  const strValue = value.toString().split("");
  let count = 0;

  for (let i = 0; i < strValue.length; i++) {
    if (strValue[i] == string) {
      count++;
    }
  }
  return count;
}

// upper and lower case
function occurenceCountCase(value, string) {
  const strValue = value.toString().toLocaleLowerCase().split("");
  let count = 0;
  for (let i = 0; i < strValue.length; i++) {
    if (strValue[i] == string.toLocaleLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(occurenceCount("This is HeLLo world", "L"));
console.log(occurenceCountCase("This is HeLLo world", "L"));

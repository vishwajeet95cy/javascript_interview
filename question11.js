// How to find number of occurences of a character in a string?

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

console.log(occurenceCount("This is Hello world", "l"));

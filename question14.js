// How to convert first letter of a string to uppercase?

function stringUpperCase(value) {
  const string = value.toString().split(" ");

  return string
    .map((val) => {
      return val.charAt(0).toUpperCase() + val.slice(1);
    })
    .join(" ");
}

function stringUpperCaseN(value) {
  const string = value.toString().split(" ");
  let result = "";

  for (let i = 0; i < string.length; i++) {
    result += string[i].charAt(0) + string[i].slice(1) + " ";
  }
  return result;
}

console.log(stringUpperCase("Hello World"));
console.log(stringUpperCaseN("Hello World"));

// How to convert first letter of a string to uppercase?

function stringUpperCase(value) {
  const string = value.toString().split(" ");

  return string
    .map((val) => {
      return val.charAt(0).toUpperCase() + val.slice(1);
    })
    .join(" ");
}

console.log(stringUpperCase("Hello World"));

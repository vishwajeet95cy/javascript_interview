// How to convert celsius to fahrenheit or fahrenheit to celsius?
// formula
// C to F => F = C*1.8+32
// F to C => C = 5/9 * (F -32)

function fahrenheitToCelsius(value) {
  return value * 1.8 + 32;
}

console.log(fahrenheitToCelsius(19));

function celsiusToFahrenheit(value) {
  return (5 / 9) * (value - 32);
}

console.log(celsiusToFahrenheit(90));

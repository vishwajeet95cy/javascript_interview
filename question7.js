// How to find Max and Min value in a given Array?

const arrNumber = [1, 9, 87, 65, 655];

function maximumNumber(arr) {
  let result = arr[0];
  for (const element of arr) {
    if (element > result) {
      result = element;
    }
  }
  console.log(result);
}

maximumNumber(arrNumber);

function maxFunction(arr) {
  return arr.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
  });
}

console.log(maxFunction(arrNumber));

function minimumNumber(arr) {
  let result = arr[0];
  for (const element of arr) {
    if (element < result) {
      result = element;
    }
  }
  console.log(result);
}

minimumNumber(arrNumber);

function minFunction(arr) {
  return arr.reduce((prev, cur) => {
    return prev < cur ? prev : cur;
  });
}

console.log(minFunction(arrNumber));

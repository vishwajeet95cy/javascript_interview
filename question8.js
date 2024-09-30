// How to find the missing number in a given integer array of 1 to 10?

const arrNum = [1, 2, 3, 4, 5, 6, 9, 10];

const missingArray = [];

function missingNumber(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  for (let i = minValue; i < maxValue; i++) {
    if (!arr.includes(i)) {
      missingArray.push(i);
    }
  }
}

function missingNumber2(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missingArray.push(i);
    }
  }
}

missingNumber(arrNum);
console.log(missingArray);

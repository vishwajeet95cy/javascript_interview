//How to Find even or Odd number in a given array?

const number = [1, 2, 3, 8, 9, 12, 16];

const even = number.filter((val) => val % 2 === 0);
const odd = number.filter((val) => val % 2 !== 0);

console.log({ even, odd });

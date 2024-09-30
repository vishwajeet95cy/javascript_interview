// How to find Duplicate elements in a given Array?

const arrayNum = [1, 2, 8, 2, 9, 8];

const duplicate = arrayNum.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);

console.log(duplicate);

// How to compare two arrays are equal or not?

const arr1 = [2, 9, 6, 8, 4];
const arr2 = [4, 8, 6, 9, 2, 12];

function isArraySame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((curEle) => {
    if (arr2.indexOf(curEle) > -1) {
      return (curEle = [arr2.indexOf(curEle)]);
    }
  });
}

console.log(isArraySame(arr1, arr2));

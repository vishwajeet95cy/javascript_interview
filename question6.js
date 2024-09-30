// How to find intersection of two arrays/sets?

const arr1 = [2, 9, 6, 8, 4, 4, 4];
const arr2 = [4, 8, 6, 9, 12];

// first solution
function findIntersection(arr1, arr2) {
  let arr = [];
  for (let i = 0; i <= arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  console.log([...new Set(arr)]);
}

findIntersection(arr1, arr2);

// second solution
const intersectionVal = arr1.filter((ele) => arr2.includes(ele));
console.log([...new Set(intersectionVal)]);

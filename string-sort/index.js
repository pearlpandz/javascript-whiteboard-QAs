const strings = ['hello', 'apple', 'orange', 'pinapile', 'zebra'];
const numbers = [10, 3, 4, 2, 12, 23, 7, 3, 6];

const newNumberArr = sortNumberArr(numbers);
console.log(newNumberArr);
const newStringArr = sortStringArr(strings);
console.log(newStringArr);

function sortNumberArr(arr) {
  const newArray = arr.sort(sortNumber);
  return newArray;
}

function sortNumber(a, b) {
  return a - b;
}

function sortStringArr(arr) {
    const newArray = arr.sort();
    return newArray;
  }

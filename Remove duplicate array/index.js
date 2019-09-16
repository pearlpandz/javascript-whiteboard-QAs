const names = [
  'muthu',
  true,
  true,
  undefined,
  undefined,
  null,
  null,
  false,
  false,
  1,
  1,
  2,
  2,
  3,
  4,
  4,
  'mangalesh',
  'mangalesh',
  'muthu',
  'mangalesh',
  'muthu',
  'muthu',
  'muthu',
  'arun',
  'saran',
  'saran',
  'arun',
  'saran',
  'arun'
];

const nonDuplicateArray = removeDuplicate(names, 'muthu');
console.log('duplicate removed =', nonDuplicateArray[0])
console.log('count of given string', nonDuplicateArray[1]);

// reusable function for duplication remove [string, number, null, undefined, boolean]
function removeDuplicate(arr, str) {
  let newArray = [];
  let count = 0;
  for (let value of arr) {
    const index = newArray.indexOf(value);
    if (value === str) count++;
    if (index === -1) newArray.push(value);
  }
  return [newArray,count];
}

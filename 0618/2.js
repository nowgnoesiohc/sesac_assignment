// 배열을 객체로 만드시오. (makeObjectFromArray)
const arr = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];
function makeObjectFromArray(arr) {
  const newObj = {};
  for (const i in arr) {
    const [k, ...v] = arr[i];
    newObj[k] = v;
  }
  return newObj;
}
console.log(makeObjectFromArray(arr)); // { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

// 위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)
const obj = {
  A: [10, 20],
  B: [30, 40],
  C: [50, 60, 70],
};
function makeArrayFromObject(obj) {
  const newArr = [];
  for (const i in obj) {
    newArr.push([...[i], ...obj[i]]);
  }
  return newArr;
}
console.log(makeArrayFromObject(obj)); // [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]

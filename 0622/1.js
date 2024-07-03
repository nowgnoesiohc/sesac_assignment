//다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오. (단, 입력값은 다음 예시로 한정함)
const assert = require("assert");

function push(array, ...args) {
  const newArray = [...array, ...args];
  return newArray;
}
function pop(array, arg) {
  const newArray = [];
  for (let i in array) newArray = [...array[i]];
  return newArray;
}
function unshift(array, ...args) {
  const newArray = [...args, ...array];
  return newArray;
}
function shift(array, ...args) {}

const arr = [1, 2, 3, 4];
assert.deepstrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepstrictEqual(pop(arr), 4);
assert.deepstrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
// assert.deepstrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
// assert.deepstrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// assert.deepstrictEqual(shift(arr), [2, 3, 4]);
// assert.deepstrictEqual(shift(arr, 2), [3, 4]);
// assert.deepstrictEqual(arr, [1, 2, 3, 4]);

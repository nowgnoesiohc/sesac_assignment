const arr = [1, 2, 3, 4, 5, 6];
//다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오. (단, 입력값은 다음 예시로 한정함)
function push(array, ...args) {
  const newArray = [...array, ...args];
  return newArray;
}
function pop(array, arg) {
  let newArray = [];

  for (const i = 0; i < arg.length; i += 0)
    newArray = [...newArray, ...array[i]];
  return newArray;
}
function unshift(array, ...args) {
  const newArray = [...args, ...array];
  return newArray;
}
function shift(array, ...args) {}

console.log();
//console.log(pop(arr));
console.log(pop(arr, 2)); // 2개 팝!
console.log(unshift(arr, 0), [0, 1, 2, 3, 4]);
console.log(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
console.log(shift(arr), [2, 3, 4]);
console.log(shift(arr, 2), [3, 4]);
console.log(arr, [1, 2, 3, 4]);

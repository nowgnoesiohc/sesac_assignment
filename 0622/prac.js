const arr = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
console.log(arr.slice(1, 3));
// ex2) [3]부터 모두 다 추출
console.log(arr.slice(2));
// ex3) [2,3,4] 제거하기
arr.splice(1, 3);
console.log(arr);
// ex4) 복원하기
arr.splice(1, 0, 2, 3, 4);
console.log(arr);
// ex5) [3] 부터 끝까지 제거하기
arr.splice(2);
console.log(arr);
// ex6) 복원하기
arr.splice(2, 0, 3, 4, 5);
console.log(arr);
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
arr.splice(2, 0, "X", "Y", "Z");
console.log(arr);
// 원복
arr.splice(2, 3, 3);
// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const xyz = ["X", "Y", "Z"];
// // 방법1
const arr1 = [arr[0], arr[1], ...xyz, arr[3], arr[4]];
// // 방법2
const arr2 = [...arr.slice(0, 2), ...xyz, ...arr.slice(3)];

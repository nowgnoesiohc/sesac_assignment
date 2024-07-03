const arr = [100, 200, 300, 400, 500, 600, 700];
const obj = {
  name: "lim",
  addr: "Yongsan",
  level: 1,
  role: 9,
  receive: false,
};
// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
for (const i in arr) console.log(i);
// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
for (const i in arr) console.log(arr[i]);
// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
for (const i in obj) console.log(i);
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
for (const i in obj) console.log(obj[i]);
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
for (const i of Object.values(obj)) console.log(i);
// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
Object.defineProperty(obj, "level", {
  enumerable: false,
});
// 7. role 프로퍼티는 읽기전용으로 설정하시오.
Object.defineProperty(obj, "role", {
  writable: false,
});

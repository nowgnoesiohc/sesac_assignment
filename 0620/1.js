// 함수를 한번만 실행하게 하는 once 함수를 작성하시오.
const once = (f) => {
  let flag = 0;
  return (...args) => {
    if (!flag) {
      //'undefine'은 코드에는 안쓰는게 좋다.
      flag = 1;
      return f(...args);
    }
  };
};
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined
// * try this
// 매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.

// (test 요령: 0.1초 한 번씩 실행하게 해놓고, 1초 후에 초기화)

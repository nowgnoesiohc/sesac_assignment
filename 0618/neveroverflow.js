function neverOverflow(num) {
  let stopN = 0;
  let ret = result(num);

  while (stopN !== 0) ret += result(stopN);
  function result(n) {
    try {
      stopN = 0;
      return n <= 1 ? n : n + result(n - 1);
    } catch (err) {
      stopN = n;
      return 0;
    }
  }
  return ret;
}

// 만약 memoizedFactorial 함수에 큰 수를 넣으면 CallStack이 Overflow 발생합니다.(RangeError: Maximum call stack size exceeded)

// 아래와 같이 큰 수를 입력해도 Stack Overflow가 발생하여도 결과가 나오도록하는 함수를 작성하려면?
// (cf. factorial(5000)은 Infinity가 나오므로 곱셈을 덧셈으로 테스트하자!)
let sum = 0;
for (let i = 1; i <= 10000; i += 1) sum += i;
console.log("🚀  sum:", sum, neverOverflow(10000));

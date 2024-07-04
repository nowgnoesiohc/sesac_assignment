// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오. (단, 소숫점 자리수는 긴쪽에 맞춘다)
function addPoints(a, b) {
  let i;
  for (i = 1; ; i *= 10) {
    if ((a * i) % 1 == 0 && (b * i) % 1 == 0) break;
  }
  a = a * i;
  b = b * i;
  return (a + b) / i;
}
console.log(addPoints(0.21354, 0.1));

// 예시 답안
function getPointLength(x) {
  //소수점 길이 구해줌
  return x?.toString().length - 2;
}
function addPoints() {
  let aLen = getPointLength(a);
  let bLen = getPointLength(b);

  // (가)
  const bigLen = aLen > bLen ? aLen : bLen;
  return a + b.toFixed(bigLen);
  // (나)
  console.log(+(a + b).toFixed(aLen > bLen ? aLen : bLen));
  // (다)
  console.log(+(a + b).toFixed(Math.max(aLen, bLen)));
}

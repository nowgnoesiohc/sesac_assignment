// 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.

// 내 코드
let x;
for (let i = 1; i <= 10; i++) {
  x = Math.sqrt(i);
  if (x % 1 != 0) console.log(`${i} ${Math.round(x * 1000) / 1000}`);
}

// 예시 정답
for (let i = 1; i <= 10; i += 1) {
  const root = Math.sqrt(i);
  if (root % 1 === 0) continue;
  console.log(+root.toFixed(3));
  // console.log(Math.round(rood * 1000) / 1000); // 이렇게 해도 되는데 위에 거 추천...
}

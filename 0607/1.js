//for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
for (let i = 0.1; i < 1; i = i + 0.1) {
  console.log(Math.round(i * 10) / 10);
}
// 쓰레기값 붙을 수도 있음,,

// 예시
for (let i = 0.1; i < 1; i = i + 0.1) {
  console.log(+i.toFixed(1));
}

// 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
const today = new Date();
let x = today.getDay();
switch (x) {
  case 1:
    x = "화";
    break;
  case 3:
    x = "수";
    break;
  case 4:
    x = "목";
    break;
  case 5:
    x = "금";
    break;
  case 6:
    x = "토";
    break;
  case 7:
    x = "일";
    break;
}
console.log(`오늘은 ${x}요일입니다.`);


// 예시

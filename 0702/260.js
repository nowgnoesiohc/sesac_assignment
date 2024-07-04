// 오른 쪽과 같은 형태로 출력하는 fmt 함수를 작성하시오.
// 주문합계: 45,000원
// 세엑합계: 4,500원
function fmt(strings, ...values) {
  const res = [];
  for (let i = 0; i < strings.length; i++) {
    // console.log(strings[i]);
    res.push(strings[i]);
    if (i < values.length) {
      res.push(values[i]);
    }
  }
  return res.join("");
}

const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

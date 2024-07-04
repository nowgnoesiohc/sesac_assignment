const WEEK_NAMES = "일월화수목금토"; // 전역으로 잡으면 constant pool을 안뒤져도 돼서 좋다!
const today = new Date();
console.log(`오늘은 ${WEEK_NAMES[today.getDay()]}요일입니다.`);

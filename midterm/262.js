// 초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.
s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];

searchByKoreanInitialSound(s, "ㄱㅅㄱ");
searchByKoreanInitialSound(s, "ㅌㅅㅁ");
searchByKoreanInitialSound(s, "ㅂㅁ");
searchByKoreanInitialSound(s, "ㅍㅁ");
searchByKoreanInitialSound(s, "ㄱ1ㅅ");
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), [
  "강원도 고성군",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), [
  "강원도 고성군",
  "고성군 토성면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), [
  "고성군 토성면",
  "토성면 북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), [
  "토성면 북면",
  "북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);

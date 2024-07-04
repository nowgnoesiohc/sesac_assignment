// 1. 문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.
isEndJaum('강원도');   // false
isEndJaum('바라당');   // true
isEndJaum('ㅜㅜ');    // false
isEndJaum('케잌');    // true
isEndJaum('점수 A');  // false lmnr   cf. isEndJaum('알파벳L')은 true
isEndJaum('24');     // false   cf. isEndJaum('23')은 true 136780


// 2. 조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.
`고성군${iga('고성군')}`;   // 고성군이  cf. `강원도${iga('강원도')}` ⇒ 강원도가
`고성군${eunun('고성군')}`; // 고성군은  cf. `강원도${eunun('강원도')}` ⇒ 강원도는
`고성군${eulul('고성군')}`; // 고성군을  cf. `강원도${eulul('강원도')}` ⇒ 강원도를
(추가) ~이어야/여야, ~이랑/랑           isEndJaum('북면') ?  '이' : '가')

assert.equal(isEndJaum('아지오'), false);
assert.equal(isEndJaum('북한강'), true);
assert.equal(isEndJaum('뷁'), true);
assert.equal(isEndJaum('강원도'), false);
assert.equal(isEndJaum('바라당'), true);
assert.equal(isEndJaum('ㅜㅜ'), false);
assert.equal(isEndJaum('케잌'), true);
assert.equal(isEndJaum('점수 A'), false);
assert.equal(isEndJaum('알파벳L'), true);
assert.equal(isEndJaum('24'), false);
assert.equal(isEndJaum('23'), true);

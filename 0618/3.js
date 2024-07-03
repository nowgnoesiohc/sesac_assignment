// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.
const kim = { nid: 3, nm: "Hong", addr: "Pusan" };
const lee = {
  num: 1,
  name: "Lee",
  addr: { city: "Seoul", district: "Gangdong" },
};

// shallow copy
function depth1Copy(obj) {
  const newObj = {};
  for (const k in obj) newObj[k] = obj[k];
  return newObj;
}

// depth1 test
const newKim = depth1Copy(kim);
newKim.addr = "Daegu";
console.log("Kim :", kim);
console.log("newKim :", newKim);

// deep copy

tt = { A: { AA: { AAA: { AAAA: 1, BBBB: 2 }, BBB: 3 }, BB: 2 }, B: 1 };
function isEmpty(obj) {
  for (const i in obj) return true;
  return false;
}
function isObjExistIn(obj) {
  for (const i in obj) {
    for (const j in obj[i]) return true;
  }
  return false;
}
function deepCopy(obj) {
  const newObj = {};
  if (isObjExistIn(obj)) return depth1Copy(obj[i]);
  for (const k in obj) newObj[k] = deepCopy(obj[k]);
}

// depth2 test
const newLee = deepCopy(lee);
newLee.addr.city = "Pusan";
console.log("Lee :", lee);
console.log("newLee :", newLee);

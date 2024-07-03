obj = { A: { a: 3 } };
dep1 = { a: 1, b: 2 };

function isObjExistIn(obj) {
  for (const i in obj) {
    for (const j in obj[i]) return true;
  }
  return false;
}
function isnotEmpty(obj) {
  for (const i in obj) return true;
  return false;
}
console.log(isObjExistIn(obj["A"]));
console.log(isnotEmpty(obj["A"]));

console.log(isObjExistIn(obj["A"]["a"]));
console.log(isnotEmpty(obj["A"]["a"]));

console.log(isnotEmpty(dep1));
console.log(isObjExistIn(dep1));

function isEmpty(obj) {
  for (const i in obj) return false;
  return true;
}
function deepCopy(obj) {
  const newObj = {};
  for (const k in obj) {
    if (isEmpty(obj) == true) {
      newObj[k] = obj[k];
      console.log("으악", obj[k]);
    } else newObj[k] = deepCopy(obj[k]);
  }
  return newObj;
}

tt = {
  A: {
    AA: { AAA: 1, BBB: 2 },
    BB: 3,
  },
  B: 4,
};
const newtt = deepCopy(tt);
console.log("newtt :", newtt);

newtt["A"]["AA"] = 123;
console.log("tt :", tt);
console.log("newtt :", newtt);

// function isObjExistIn(obj) {
//   for (const i in obj) {
//     for (const j in obj[i]) return true;
//   }
//   return false;
// }

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

const f1 = (user) => {
  let { id, name } = user;
  console.log(id, name);
};
function f2(user) {
  console.log(user.id, user.name);
}
const f3 = ({ id, name } = user) => {
  console.log(id, name);
};

f1(hong);
f2(lee);
f3(hong);

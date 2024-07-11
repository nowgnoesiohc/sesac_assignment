// setTimeout * 3을 Promise 사용해서 refactoring
const depthTimer = (dep) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${dep}`, new Date());
      if (dep === 3) reject(new Error("Already 3-depth!!"));
      else resolve(dep + 1);
    }, dep * 1000);
  });
};
console.log("START!", new Date());

depthTimer(1)
  .then(depthTimer)
  .then(depthTimer)
  .catch((err) => console.error(err.message));

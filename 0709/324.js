// promiseAll 함수 작성
// randTime : 랜덤한 시간 후에 주어진 값을 해결하는 Promise를 반환
// promiseAll : 모든 Promise가 해결될 때까지 기다린 후 결과 반환, 하나라도 거부되면 거부된 상태로 끝
assert = require("assert");

const promiseAll = (proms) => {
  return new Promise((resolve, reject) => {
    const result = [];
    let cnt = 0;

    proms.forEach((prom, idx) => {
      prom
        .then((value) => {
          result[idx] = value;
          cnt += 1;
          if (cnt === proms.length) resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!"); // 안될 듯하다...
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });

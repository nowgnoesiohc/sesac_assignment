// 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

// cf. const id1 = arr[0][0].id;
console.log(arr[0], arr[1]);

//const { 0: id1 } = arr[0];
// let id2 = 1;
// let id3 = 1;

// const { id: id1 } = arr[0][0];

const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
console.log(id1, id2, id3);
// 출력결과: 1 2 3

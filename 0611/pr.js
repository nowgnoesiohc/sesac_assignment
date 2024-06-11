const arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr;
console.log(a, b, c);

const arrr = [1, 2, [3, 4], [5, 6], { ax: 7, ay: 8 }, { ax: 9 }];

const [, x, [, y], z, , { ax }] = arrr;

console.log(x, y, z, ax);
// 2 4 [5,6] 9

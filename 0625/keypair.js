// 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때, 배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N) 함수를 작성하시오. (O(n^2) 이면 fail!!)

const keyPair = (arr, n) => {
  const val_idx = {};
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    if (val_idx[val]) return [val_idx[val], i];
    val_idx[n - val] = i;
  }
};

console.log(keyPair([1, 3, 4, 5], 7)); // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
console.log(keyPair([1, 2, 3, 4, 5, 7], 9)); // [3, 4]  or [1, 5]
// cf. O(n^2) ⇒ ⇒ ⇒ O(N) || O(logN)
// assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
// assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);

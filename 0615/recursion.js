function makeArray(n) {
  if (n == 0) return [];
  return [...makeArray(n - 1), n];
}
function makeReverseArray(n) {
  if (n == 0) return [];
  return [n, ...makeReverseArray(n - 1)];
}

console.log(makeArray(5));
console.log(makeReverseArray(5));

function memoized(fn) {
  const memoizedTable = {};
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const fibonacci_mem = memoized(function A(n) {
  if (n <= 1) return n;
  // Use the inner function A for recursive calls
  return A(n - 2) + A(n - 1);
});

console.log("memoization: ", fibonacci_mem(30)); // 832040 (Correct output)

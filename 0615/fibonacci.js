// Loop
function fibonacci_loop(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib[n];
}
console.log("loop: ", fibonacci_loop(30)); //832040

// 재귀
function fibonacci_rec(n) {
  if (n <= 1) return n;
  return fibonacci_rec(n - 2) + fibonacci_rec(n - 1);
}
console.log("recursive: ", fibonacci_rec(30)); //832040

// memoization
function memoized(fn) {
  const memoizedTable = {};
  return function (k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}
const fibonacci_mem = memoized(function (n) {
  if (n <= 1) return n;
  return fibonacci_mem(n - 2) + fibonacci_mem(n - 1);
});
console.log("memoization: ", fibonacci_mem(30)); //832040

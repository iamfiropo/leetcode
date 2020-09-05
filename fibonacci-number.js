function fib(n) {
  const cache = { "0": 0, "1": 1 };

  function memoize(n) {
    if (n in cache) {
      return cache[n];
    } else if (n < 2) {
      return n;
    } else {
      return (cache[n] = memoize(n - 1) + memoize(n - 2));
    }
  }

  memoize(n);
  return cache[n];
}

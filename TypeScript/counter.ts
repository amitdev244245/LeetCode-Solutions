// Problem No: 2620
// Problem Name: Counter
// Problem Link: https://leetcode.com/problems/counter
// Time:  O(1)
// Space: O(1)

function createCounter(n: number): () => number {
  return function () {
    return n++;
  };
}

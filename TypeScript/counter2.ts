// Problem No: 2665
// Problem Name: Counter II
// Problem Link: https://leetcode.com/problems/counter-ii
// Time:  O(1)
// Space: O(1)

type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let curr = init;
  return {
    increment: (): number => ++curr,
    decrement: (): number => --curr,
    reset: (): number => (curr = init),
  };
}

// Problem No: 2635
// Problem Name: Apply Transform Over Each Element in Array
// Time:  O(n)
// Space: O(n)

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const res = [];
  arr.forEach((elem, index) => {
    res.push(fn(elem, index));
  });
  return res;
}

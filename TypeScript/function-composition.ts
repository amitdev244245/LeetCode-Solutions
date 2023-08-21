// Problem No: 2629
// Problem Name: Function Composition
// Problem Link: https://leetcode.com/problems/function-composition

type F = (x: number) => number;

function compose(functions: F[]): F {
  if (functions.length === 0) {
    return (x) => {
      return x;
    };
  }
  return functions.reduceRight((prevFn, currFn) => {
    return (x) => {
      return currFn(prevFn(x));
    };
  });
}

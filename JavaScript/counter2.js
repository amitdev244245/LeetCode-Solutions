// Problem No: 2665
// Problem Name: Counter II
// Problem Link: https://leetcode.com/problems/counter-ii
// Time:  O(1)
// Space: O(1)

var createCounter = function (init) {
    let curr = init;
    return {
        increment: () => ++curr,
        decrement: () => --curr,
        reset: () => (curr = init)
    }
};
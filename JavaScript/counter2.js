// Problem No: 2620
// Problem Name: Counter II
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
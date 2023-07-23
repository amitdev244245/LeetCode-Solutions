// Problem No: 2620
// Problem Name: Counter
// Time:  O(1)
// Space: O(1)

var createCounter = function (n) {
    return function () {
        return n++;
    };
};
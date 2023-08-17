// Problem No: 2667
// Problem Name: Create Hello World Function
// Problem Link: https://leetcode.com/problems/create-hello-world-function
// Time:  O(1)
// Space: O(1)

var createHelloWorld = function () {
    return function (...args) {
        return "Hello World"
    }
};
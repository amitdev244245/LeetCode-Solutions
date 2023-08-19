// Problem No: 2626
// Problem Name: Array Reduce Transformation
// Problem Link: https://leetcode.com/problems/array-reduce-transformation
// Time:  O(n)
// Space: O(1)

var reduce = function (nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
};
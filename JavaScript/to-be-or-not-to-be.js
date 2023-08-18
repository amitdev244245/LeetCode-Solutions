// Problem No: 2704
// Problem Name: To Be Or Not To Be
// Problem Link: https://leetcode.com/problems/to-be-or-not-to-be
// Time:  O(1)
// Space: O(1)

var expect = function (val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};
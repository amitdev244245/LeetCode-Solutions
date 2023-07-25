// Problem No: 2634
// Problem Name: Filter Elements from Array
// Time:  O(n)
// Space: O(n)

var filter = function (arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i]);
        }
    }
    return res;
};
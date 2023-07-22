// Problem No: 2667
// Problem Name: Create Hello World Function
// Time:  O(1)
// Space: O(1)

function createHelloWorld() {
	return function(...args): string {
        return "Hello World";
    };
};
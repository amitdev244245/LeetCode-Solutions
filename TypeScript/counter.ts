// Problem No: 2620
// Problem Name: Counter
// Time:  O(1)
// Space: O(1)

function createCounter(n: number): () => number {
    return function() {
        return n++;
    }
}
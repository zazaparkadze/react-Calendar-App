function makeArrayOfConsecutiveNumbers(k, n, step = 1) {
    const a = [];
    for (let i = k; i < n + 1; i++) {
        a[i] = i * step;
    }
    return a.slice(k);
}
console.log(makeArrayOfConsecutiveNumbers(1, 31, 10));
console.log(makeArrayOfConsecutiveNumbers(0, 59));
console.log(makeArrayOfConsecutiveNumbers(0, 23));
console.log(makeArrayOfConsecutiveNumbers(2, 10));

function sumAll(arr) {
    const begin = Math.min(...arr);
    const end = Math.max(...arr);
    let sum = 0;
    for (let i = begin; i <= end; i++) {
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);
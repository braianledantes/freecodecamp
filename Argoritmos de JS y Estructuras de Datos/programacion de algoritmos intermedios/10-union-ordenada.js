function uniteUnique(...arr) {
    const s = new Set(arr.flat())
    return [...s];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
function steamrollArray(arr) {
    const a = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            a.push(...steamrollArray(arr[i]));
        } else {
            a.push(arr[i]);
        }
    }
    return a;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
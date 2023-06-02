function destroyer(arr, ...nums) {
    return arr.filter(elem => !nums.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
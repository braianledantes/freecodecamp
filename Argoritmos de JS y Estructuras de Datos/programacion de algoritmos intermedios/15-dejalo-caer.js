function dropElements(arr, func) {
    const index = arr.findIndex(func);
    if (index >= 0) {
        return arr.slice(index);
    } else {
        return []
    }

}

dropElements([1, 2, 3, 4], function (n) { return n > 5; });
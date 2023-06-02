function diffArray(arr1, arr2) {
  const newArr = [
    ...arr1.filter(elem => arr2.indexOf(elem) === -1),
    ...arr2.filter(elem => arr1.indexOf(elem) === -1)
  ];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
const shift = (a, i) => {
  a[i+1] = a[i]
  return a
}

const insertionSort = (a, n) => {
  //n = a.length
  let rsArray = [a[0]]
  for (let i = 1; i < n; i++) {
    // for (let j = 0; j < rsArray.length; j++) {
    let savedIndex = i;
    for (let j = i; j > 0 && rsArray[j - 1] > a[i]; j--) {
      savedIndex = savedIndex - 1
      rsArray = shift(rsArray, j-1)
    }
    rsArray[savedIndex] = a[i]
  }
  return rsArray
}

console.log('insertion sort:', insertionSort([1, 4, 32, 15, 45, 6, 8, 19, 4, 13, 33, 32, 50, 99, 77], 15))
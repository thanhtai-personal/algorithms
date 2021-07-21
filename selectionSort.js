const swap = (a, i, j) => {
  let t = a[i]
  a[i] = a[j]
  a[j] = t
  return a
}

const selectionSort = (a, n) => {
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      // find index of min item
      if (a[j] < a[min]) {
        min = j
      }
    }
    a = swap(a, i, min)
  }
  return a
}

console.log('selection sort:', selectionSort([1, 4, 32, 15, 45, 6, 8, 19, 4, 13, 33, 32, 50, 99, 77], 15))
const swap = (a, i, j) => {
  let t = a[i]
  a[i] = a[j]
  a[j] = t
  return a
}

const bubbleSort = (a, n) => {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = n - 1; j > i; j--) {
      // find index of min item
      if (a[j] < a[i]) { 
        a = swap(a, i, j)
      }
    }
  }
  return a
}

console.log('selection sort:', bubbleSort([1, 4, 32, 15, 45, 6, 8, 19, 4, 13, 33, 32, 50, 99, 77], 15))
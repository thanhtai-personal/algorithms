const insertionSortWithJump = (a, n, jumpSteps) => {
  //n = a.length
  for (let i = jumpSteps; i < n; i++) {
    // for (let j = 0; j < rsArray.length; j++) {
    let valueToInsert = a[i];
    let idxToInsert = i;
    while (idxToInsert >= jumpSteps && a[idxToInsert - jumpSteps] > valueToInsert) {
      a[idxToInsert] = a[idxToInsert - jumpSteps]
      a[idxToInsert - jumpSteps] = -1 // for test
      idxToInsert -= jumpSteps
    }
    if (idxToInsert !== i) {
      a[idxToInsert] = valueToInsert
    }
  }
  return a
}

const knuth = (n) => {
  let jumpSteps = 1;

  while (jumpSteps <= n / 3) {
    jumpSteps = jumpSteps * 3 + 1;
  }
  return {
    jumpSteps,
    getNewJumpSteps: (_jumpSteps) => (_jumpSteps - 1) / 3,
    stopCondition: 0
  }
}

const shell = (n) => {
  return {
    jumpSteps: parseInt(n / 2),
    getNewJumpSteps: (jumpSteps) => parseInt(jumpSteps / 2),
    stopCondition: 0
  }
}

const pratt = (n) => {
  // h = 2^p * 3^q
  let jumpSteps = 1, p = 0, q = 0, isAddP = true
  while (jumpSteps < n / 3) {
    jumpSteps = Math.pow(2, p) * Math.pow(3, q);
    if (isAddP) {
      p++
      isAddP = false
    } else {
      q++
      isAddP = true
    }
  }
  return {
    jumpSteps,
    getNewJumpSteps: (jumpSteps) => {
      if (isAddP) {
        q--
        isAddP = false
      } else {
        p--
        isAddP = true
      }
      return parseInt(jumpSteps / (Math.pow(2, p) * Math.pow(3, q)))
    },
    stopCondition: 0
  }
}

const hibbard = (n) => {
  let jumpSteps = 1;

  while (jumpSteps < (n - 1) / 2) {
    jumpSteps = (2 * jumpSteps) + 1 ;
  }


  return {
    jumpSteps,
    getNewJumpSteps: (jumpSteps) => parseInt((jumpSteps - 1) / 2),
    stopCondition: 0
  }
}

const shellSort = (a, n, getJumpSteps) => {
  // n = a.length
  let { jumpSteps, getNewJumpSteps, stopCondition } = getJumpSteps(n)

  while (jumpSteps > stopCondition) {
    console.log('jumpSteps', jumpSteps)
    a = insertionSortWithJump(a, n, jumpSteps)
    jumpSteps = getNewJumpSteps(jumpSteps)
  }
  return a
}

console.log('shell sort - knuth:', shellSort([1, 4, 32, 15, 45, 6, 8, 19, 4, 13, 33, 32, 50, 99, 77]
  , 15, knuth))
console.log('shell sort - shell:', shellSort([1, 4, 32, 15, 45, 6, 8, 19, 4, 13, 33, 32, 50, 99, 77]
  , 15, shell))
console.log('shell sort - pratt:', shellSort([1, 4, 32, 15, 45, 6, 8, 19, 4, 13, 33, 32, 50, 99, 77]
  , 15, pratt))
console.log('shell sort - hibbard:', shellSort([1, 4, 32, 15, 45, 6, 8, 19, 4, 13
  , 33, 32, 50, 99, 77, 6, 77, 55, 33, 100
  , 34, 33, 51, 98, 78, 7, 76, 56, 34, 101
  , 35, 34, 52, 97, 79, 8, 75, 57, 35, 102]
  , 40, hibbard))
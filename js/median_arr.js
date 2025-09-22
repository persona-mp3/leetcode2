function findMedian(a, b) {
  /*Edge Cases
   * using .sort() it arranges in ascending order
   * */
  INVALID_DATA = "Values entered are not arrays"
  if (!Array.isArray(a) || !Array.isArray(b))  {
    return INVALID_DATA
  }

  const fmtArr = [...a, ...b]
  console.log(fmtArr)
  const isSorted = checkSort(fmtArr)

  if (!isSorted) {
    console.log("Array will now be sorted")
    fmtArr.sort((x, y) => x -y)
  }
  console.log(fmtArr)

  console.log("no need for sorting")
  return medianHelper(fmtArr)
}

function medianHelper(fmtArr) {
   if (fmtArr.length <= 1) {
    return fmtArr[0]
  }

  if (fmtArr.length % 2 !== 0) {
    return fmtArr[Math.trunc(fmtArr.length/2)]
  }

  
  
  let j = fmtArr.length - 1
  for (let i =0; i < fmtArr.length; i++) {
    if (j - i == 1) {
      return (fmtArr[i] + fmtArr[j]) / 2
    }
    j--
  }
}

function checkSort(fmtArr) {
  for (let i=0; i < fmtArr.length; i++) {
    if (fmtArr[i] > fmtArr[i + 1]) {
      return false
    }
  }
  return true
}

const a = [3]
const b = [-2, -1]
console.log(findMedian(a, b))

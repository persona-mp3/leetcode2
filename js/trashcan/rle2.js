/*
 * RLE is a string compresion method that woks by replacing the total subsequent occurence of a word with a number and then the word
 * AABBCCCD ->? 2A2B3C1D
 * 33251 -> 23121311
 * */

/*
 * We want to iterate the freqMap with a Set because a set follows insetion order and then append the value from the freqMap and then the sets value
 * */

function rle(num) {
  if (typeof num !== "number") {
    return 
  }

  if (num === 1) {
    return String(num)
  }

  const str = String(num)
  let freqMap = {}
  let set = new Set()

  for (let i=0; i < str.length; i++){
    if (freqMap[str[i]] !== undefined) {
      freqMap[str[i]]++
    } else {
      freqMap[str[i]] = 1
    }

    set.add(str[i])
  }

  let encoding = ""
  for (const val of set) {
    encoding += `${freqMap[val]}${val}`
  }

  return encoding

}
const test = 33251
const case2 = 1
console.log(rle(case2))

/*
 * Given a string s, return the length of the longest subtring without duplicate characters
 * s = "abcabcbb"
 * fn() -> 3
 * Explanation -> abc is the longest amount of time you can go without runing into another character already stored inside subStr
 * 
 * So its kind of like an edging streak, how far can you go without seeing the same two characters, 
 * If you ran into the next character and it's the same as the one before it, start again, that means delete that slice
 *
 * We also need to keep track at when the word ends ;
 * for loop(len, i)
 * */

/*
 * pwwkew < 6
 * p0, w1, w2, k3, e4 ,w5
 * {p:0, w:5, k:3, e:4} <2 word are missing>
 *
 * abcabcbb < 8
 * a1 b2 c3 a4 b5 c6 b7 
 * {a:3, b: 7, c:6} < 4
 * */

// how about we just keep a stack of all the strings, we'll 
// [ch, ch, ch] {ch, ch, ch}
// if ch{ch} exists, clear array, and cut from curr string
//
function recurse(word) {
  let currMap = {}
  let currSub = []
  let currStr = word

  for (let i=0; i < word.length; i++) {
    if (currMap[currStr[i]] === undefined) {
      console.log("word doesnt exist, adding to map")
      currMap[word[i]] = i
      currSub.push(word[i])
      console.log(currMap)
      console.log("staring with ->", currStr)
    } else {
      // slice the word form that string
      console.log("word exist, slicing")
      currStr = word.slice(i+1)
      console.log("SLICED STRING -:, ", currStr)
    }
  }

  console.log(currMap, currSub)
  console.log(currStr.length)
  return currStr.length

}

recurse("bbbbbb")

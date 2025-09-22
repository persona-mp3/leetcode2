/*
 * https://leetcode.com/problems/join-two-arrays-by-id/description/
 * Given two arrays, a1, and a2, return a new array, `joinedArrray`
 * All objects will contain an interger type, for value `id`
 *  - The length of joined array should be the number of unique ids
 *  - Returned array should be in ascending order based on their key 
 *  - Similar keys should overwrite a1 in values
 *
 *  a1 = [{id: 1, x: 1}]
 *  a2 = [{id: 2, x: 9}]
 *
 *  a3 = [{id: 1}, {id: 2},]
 * */


type obj = {
  id: number;
  x?: number;
  y?: number;
  b?: any;
  v?: any;
}

/*
 * So since we know a2 is dependent in a1, we can cross check each item in a2 
 * if it exists in a1, but we need to get the keys in one place where we can reference
 * */


/*
 * Now the function doesnt account for extra values added to the object
 * And that will be dependent on the length of the object. But assuming it only 
 * contains x and y, we could just limit the scope
  */
function join(a1: obj[], a2: obj[]): obj[] {
  const ida = new Set()
  a1.forEach((item) => { ida.add(item.id) })
  console.log(ida)
  // now we can go into a1 and say, if any of these keys are in idas, 
  // we should look for it inside a1 and merge it there
  for (let i = 0; i < a2.length; i++) {
    const currItem = a2[i]
    if (ida.has(currItem.id)) {
      console.log("a1 and a2 share a similar id of -> ", currItem.id, i)
      a1 = mergeLeft(a1, a2, currItem.id, i)
    } else {
      a1.push(a2[i])
    }
  }

  console.log("New merged items -> ", a1)
  return a1
}

function mergeLeft(a1: obj[], a2: obj[], id: number, index: number) {
  a1.forEach((item) => {
    if (item.id === id) {
      console.log("merging...")
      if (item.x && a2[index].y) {
        item.x = a2[index].x
      }
      if (item.y && a2[index].y) {
        item.y = a2[index].y
      }

      if (item.b && a2[index].b) {
        item.b = a2[index].b
      }

      if (item.v && a2[index].v) {
        item.v = a2[index].v
      }
    }
  })

  return a1;
}


const o3: obj[] = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }]
const o4: obj[] = [{ id: 1, b: { c: 84 }, v: [1, 3] }]

join(o3, o4)

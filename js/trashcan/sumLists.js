/*
 * So we need to sum two linked lists together, their values are in reverse order and we need to return 
 * the sum in a linked list. so this is kinda of like the process ->
 * 1. traverseList && getNumbers.reverse()
 * 2. sumNumbers && result.linkedList()
 * */

/*
 * @params {linkedList1}
 * @params {linkedList2}
 *
 * */

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = (next === undefined ? null : next);
  }
}


function mainFn(h, j) {
  const a = build(h)
  const b = build(j)
  const resA = traverse(a)
  const resB = traverse(b)
  const n1 = reverse(resA)
  const n2 = reverse(resB)
  
  // we need to just parse the total into an array, reverse it and then build it
  let res = []
  let sum = String((n1+n2))
  console.log(sum)
  const reversedSum = String(reverse(sum))
  console.log(reversedSum)

  for (let i = 0; i < reversedSum.length; i++) {
    res.push(reversedSum[i])
    
  }

  console.log(res)
  const answer = build(res)
  console.log('linked list of sum built')
  console.log(answer)
}

function reverse(str) {
  let fmtStr = ""
  for (let i=str.length - 1;  i >= 0; i--) {
    fmtStr += str[i]
  }

  return Number(fmtStr)
}

function traverse(a) {
  let node = a 

  let res = ""
  while(node) {
    res += node.val
    node = node.next
  }
  return res
}

const build = function(arr) {
  if (!Array.isArray) {
    return "INPUT IN NOT AN ARRAY"
  }

  if (arr.length === 0) {
    return null
  }

  const lists = arr.map((node) => new Node(node))
  const head = lists[0]
  let node = null

  for (let i=1; i < lists.length; i++){
    if (!lists[i].next) {
      lists[i].next = lists[i+1]
    }
    if (i === lists.length-1) {
      lists[i].next = null
    }

  }

  head.next = lists[1]
  console.log(head)
  // console.log(JSON.stringify(head))
  return head
}


const h = [9,9,9,9,9,9,9]
const j = [9,9,9,9]
mainFn(h, j)

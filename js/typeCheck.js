/*
 * You are given two linked lists reperesenting two non negative integers, the digits are stored in reverse order, and each
 * of their nodes contain single digits. Add the two numbers and return the sum as a linked list 
 *
 * Test Cases =>
 * l1 = [2, 4, 3]
 * l2 = [5, 6, 4]
 * result = 807 {return the linked list in the reversed order also}
 *
 * */

function ListNode(value, next) {
  this.val = (value === undefined ? 0 : value)
  this.next = (next === undefined ? null : next)
}

/*
 * @params {Array} arr
 * @return {ListNode} l
 * */
function build(arr) {
  if (!Array.isArray || arr.length === 0) {
    return null
  }


  const head = new ListNode(arr[0])
  let curr = head

  for (let i=1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i])
    curr = curr.next
  }

  console.log(head)
  return head
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

var addTwoNumbers = function (l1, l2) {
  /*
   * @params {ListNode} l
   * @return {String} a
   * */
  const a = traverse(l1)
  const b = traverse(l2)

  /*
   * @params {String} a
   * @return {Number} n
   * */
  const n1 = reverse(a)
  const n2 = reverse(b)


  let res = []
  let sum = String((n1+n2))

  const reversedSum = String(reverse(sum))
  for (let i=0; i < reversedSum.length; i--) {
    res.push(Number(reversedSum[i]))
  }

  const answer = build(res)

  return answer
}

console.log(build([7, 0, 8]))


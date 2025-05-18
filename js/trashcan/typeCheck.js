function ListNode(value, next) {
  this.val = (value === undefined ? 0 : value)
  this.next = (next === undefined ? null : next)
}

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

console.log(build([7, 0, 8]))


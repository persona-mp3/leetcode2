 class Node {
   constructor(val, next){
     this.val = val;
     this.next = (next === undefined ? null : next)
   }
 } 

const list = function(arr) {
   let head = new Node(arr[0])

   for (let i=1; i < arr.length; i++) {
     if (!head.next) {
       head.next = new Node(arr[i])
     } else if (!head.next.next) {
     /* 
      * if its not null, can we want to also check the next one till the end of the array 
      * but if head.next.next is null, we can then assign its next a value 
      * */

     head.next.next = new Node(arr[i])
     }else {
        console.log("idk")
     }
   }  
   return head
 }


 
 function traverseLinkedList(linkedList, target) {

   let head = linkedList.val
   console.log(linkedList)
   if (head !== target) {
     head = traverse(linkedList.next, target)
   }

   if (!head) {
     return "target not found"
   } 

   if (head.val === target) {
     return head
   }
 }

 function traverse(node, target) {
   /*Node { val:4, next: null } -> base case when next === null and val != target*/ 
   if (!node.next && node.val !== target) {
     return false
   }

   if (node.val === target) {
     return node
   }

   if (node.val !== target && node.next ) {
     return traverse(node.next, target)
   }
 }

// const linkedList = list([5, 4, 3, 9])
// const node = traverseLinkedList(linkedList, 3)
//  console.log("linked List formed")
//  console.log(linkedList)
//
// console.log(node)  
 
 function buildList(arr) {
   let head = new Node(arr[0])
   // let tree = null


   for (let i=0; i < arr.length; i++) {
     let node = new Node(arr[i])
     if (!node.next) {
       node.next = new Node(arr[i+1])
     }
     console.log(node)

   }

   // console.log(head)
 }

 const l = [4, 3, 2]
 buildList(l)

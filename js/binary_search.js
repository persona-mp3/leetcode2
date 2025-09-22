`
 Binary search is an algorithm is a recurisve function that looks like for an item, kinda like looking inside a dictionary.
 If you have a sorted data set,preferrably an array, such as nums = [1, 2, 3, 9, 12, 19, 21] and you want to find the target of 12
 You'd take the middle element of the nums as nums[nums.length/2] and say  -> 9
 > is this middle element the target we are looking for? if no 
 > is this middle element greater than the target? if yes : 
        > So possibly, this element target is possily on the right side of this middle element 
        > [9, 12, 19, 21] is the new slice of array we are working with but instead of slicing we use pointers to denote the new slice with start and end pointers
        > func binarySearch(arr, target,start, end)
          binarySearch(arr, target, start = mid + 1, end = arr.length-1)

 > is thsi middle elemenet less than target? if yes:
        > so possibly, the required target is on the left side of the array
        > [1, 2, 3]
        > binarySearch(start=0; end = middle-1)

`

/*
 * @params {Array} number[]
 * @params {number} number
 * */
function binarySearch(arr, target, start, end) {
  if (start > end) {
    console.log("not found")
    return
  }

  m  = Math.floor((start+end)/2)

  if (arr[m] === target){
    console.log("item found", m, arr[m])
    return
  }else if (arr[m] < target){
    binarySearch(arr, target, m+ 1 ,end)
  }else {
    binarySearch(arr, target, start, m-1)
  }
}

const arr = [1, 2, 3, 9, 12, 19, 21]
binarySearch(arr, 9, 0, (arr.length-1))

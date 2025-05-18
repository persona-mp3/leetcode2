package main

import (
	"fmt"
	// "math"
)

func twoSum(nums []int, target int) [2]int{
	/*
		Give an array of intergers nums and taget, return indices of two numbers that add up to the target
		Test Case 1 : nums = [2, 7, 11, 15], target = 9 -> [2, 7]
		Test Case 2 : nums = [3, 2, 4], target = 6 -> [2, 4]
*/

	/** 
		So we fist place all the items in hashMap where they keys are the values in the array, and the values in the map are
	 the indices. So we have something like this ->
		map[num]index and []int{...values}
	* The map has an internal structure of this ->

						* arr[i] : i
	* And then we can index for each value of the array, and do a lookup in map based on this logic ->
	* targetNum := target - num[i] where i is inside the for loop
	* if map[targetNum] is found inside the map, we can get the value inside the map that value which is the index and the current index of iteration
	* so final result will be [map[targetNum], currIterationOfLoopIndex]
*/

	// map[int]int
	// targetN := target - map[index]

	// edge-cases -> check against same number
	// edge-cases -> negative numbers

	hashMap := make(map[int]int)

	for i, n := range nums {
		hashMap[n] = i
	}

	for i:=0; i < len(nums); i++{
		targetN := target - nums[i]

		index, ok := hashMap[targetN]

		if ok  && i != index{
			fmt.Printf("found indexes -> %d, %d\n", index, i)
			return [2]int{index, i}

		}

	}

	fmt.Printf("Sum not found for target %d\n", target)
	return [2]int{0, 0}
}

func main() {
	testCase := []int{2, 7, 11, 15}
	// testCase2 := []int{3, 2, 4}
	// testCase3 := []int{3, 3}
	i := twoSum(testCase, 9)
	fmt.Println(i)
}

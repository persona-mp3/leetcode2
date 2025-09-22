package main

import "fmt"
/*
	So we are just slicing the array based on the length of the smaller array and we can just select the middle element in the final array

	case 2 -> if len(a) > len(b) && len(a) + len(b) %2 !=0
	{1, 2, 3, 4}, {5 }
	{1, 2, 3, 4, 5, 6, 7}, {8, 9, 10, 11} -> {5, 6, 7} -> 6
	
	case 3 -> if len(b) > len(a) && len(a) + len(b) %2 !=0
	{1, 2 } {3, 4, 5} -> {3} -> 3
	{1, 2, 3} {4, 5, 6, 7} -> {4} -> 4
	{1, 2, 3} {4, 5, 6, 7, 8, 9} -> {4, 5, 6} -> 5
	{1, 2, 3} {4, 5, 6, 7, 8, 9, 10, 11} -> {4, 5, 6, 7, 8} -> 6
	{1, 2, 3, 4} { 5, 6, 7, 8, 9, 10, 11} -> { 5, 6, 7} - 6
	{1, 2, 3, 4, 5} { 6, 7, 8, 9, 10, 11} -> {6} - 6

	{1, 2, 3} {4, 5, 6, 7 ,8}
	{1, 2, 3, 4, 5,} { 6, 7, 8, }
	{1, 3}


	case 4 len(a) == len(b)
	{1, 2} {3, 4}  -> 2 + 3/2 -> 2.5
	{1, 2, 3} {4, 5, 6}  -> 3 + 4 /2 -> 3.5
	{1, 2, 3, 4, 5, 6} {7, 8, 9, 10, 11, 12} -> 6 +7/2 -> 6.5
	{1, 2, 3, 4, 5, 6,7, 8 , 9, 10} {11, 12, 13, 14, 15, 16, 17, 18, 19, 20} -> 11+10/2 -> 10.5

	case 5 < len(a) > len(b) but len(a) + len(b) is even
	{1, 2, 3} {4}
	{1, 2, 3, 4, 5} { 6, 7, 8}
	{1, 2, 3, 4, 5} {6} -> {2, 3, 4, 5} median>>6.5 
		* the goal is just to have two elements inside this slice
		* {2, 3, 4, 5}
		* {2, 3, 4, 5, 6, 7, 8, 9} < if the  >>5 6
		* so we can have recursion/two loops that start at each ends of the array as i and j
		* since j is always going to be greater than i, we can do this -> j-i 
		* if j - 1 = 1, that means they are beside each other, then we can find the median of those two numbers
	{1, 2, 3, 4, 5, 6} {7. 8, 9, 10}

*/

func findMedian(a, b []int) {
	if len(a) > len(b) && (len(a) + len(b)) % 2 != 0 {
		fmt.Println("case 1, a > b and have a combined length that is odd")
		sliceBy := len(b)

		c := a[sliceBy:]
		fmt.Println("New slice in case 1 ->", c)

		median := medianHelper(c)
		fmt.Println("Median is -> ", median)
	}

	
	if len(b) > len(a) && (len(a) + len(b)) % 2 != 0 {
		fmt.Println("case 2, b > a and have a combined length that is odd")
		sliceBy := len(a)

		c := b[:sliceBy]
		fmt.Println("New slice in case 2 ->", c)

		median := medianHelper(c)
		fmt.Println("Median is -> ", median)
	}

	if len(a) == len(b) {
		fmt.Println("case 3 , a and b are of equal length")
		median := float64(a[len(a)-1] + b[0]) /2
		fmt.Printf("median is -> %f\n", median)
	}

	if len(a) > len(b) && (len(a) + len(b)) % 2 == 0 {
		fmt.Println("case 4, a == b and have a total length is even")
		sliceBy := len(b)
		c := a[sliceBy:]
		fmt.Println("New slice in case 4 ->", c)
		median := medianHelper(c)
		fmt.Println("Meidan is ->", median)
	}

}

func medianHelper(c []int) float64{
	if len(c) <= 1 {
		fmt.Println("length of sliced array is les than 1")
		return float64(c[0])
	}

	if len(c) % 2 != 0 {
		return float64(c[len(c)/2])
	}

	j := len(c) - 1

	for i:=0; i < len(c) ; i++ {

		if j - i == 1 {
			fmt.Printf("i ->%d ** j ->%d\n ",c[i], c[j])
			return float64(c[i] + c[j])/2
		}
		j--
	}

	fmt.Println("median could not cacluclated")

	return float64(0)
}


func main() {
	a := []int{1, 3} 
	b:= []int{2}


	findMedian(a, b)
}

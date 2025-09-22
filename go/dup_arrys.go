package main
import (
	"fmt"
	"strconv"
	// "sort"
)

/* so we need to remove the duplicates of an array but still return the same length 
	* So lets say we have :
	* arr := []int{1, 2, 3, 2, 3}
	* fmtArr := []int{1, 2, 3, _,_)}
	* So we can add items into a new array and store in store in the hashMap at the same time

	* hashM := make(map[int]string)
	* fmtArr := make([]int{})

	* for loop, i
	* check if value exists in the hashMap before appending
	* _, ok := hashMap 
	* if ok -> hashMap["_"]
	* else hashMap[arr[i]] = str(i)

*/

func removeDuplicates(arr []int) (int ,[]string, int){
	hash := make(map[int]string)

	var fmtArr []string
	var freq int
	var unique int

	for i:=0; i < len(arr); i++{
	_, ok := hash[arr[i]]

	if ok { 
			freq++
		} else {
			hash[arr[i]] = string(i)
			fmtArr = append(fmtArr, strconv.Itoa(arr[i]))
			unique++
		}
	}
	

	for i:=0; i < freq; i++{
		fmtArr = append(fmtArr, "_")
	}

	for i:=0; i < len(fmtArr); i++ {
		arr[i], _ = strconv.Atoi(fmtArr[i])
	}

	fmt.Println(arr)	

	return len(arr), fmtArr, unique
}

/*
 * So this code actually works, return value is actually correct, but it fails the leetcode test because
	* I return a new array
*/
func main(){
	test1 := []int{1, 1, 2}
	// test2 := []int{0,0,1,1,1,2,2,3,3,4}
	l, arr, u:= removeDuplicates(test1)
	fmt.Println(l, arr, u)
}

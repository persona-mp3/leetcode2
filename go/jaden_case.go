package main

import (
	"fmt"
	"strings"
)

// This is from the code_wars, Jaden Case Strings, 
// Your task is to convert lowercase strings/sentences into toJadenCase
// "how can mirrors be real if your eyes arent real"

func toJadenCase(word string) {
	letters := strings.Split(word, " ")
	var result string

	for _, letter := range letters {
		result += fmt.Sprintf("%s%s ", strings.ToUpper(string(letter[0])), letter[1:])
	}
	fmt.Println(result)
}

func main() {
	s := "how can mirrors be real if our eyes aren't real"
	s2 := "most trees are blue"
	toJadenCase(s)
	toJadenCase(s2)
}

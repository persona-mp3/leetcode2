"""
When we get a word, we want to check if its a panlidrome, the function should return a boolean.
For example, "asus" is not a palindrome, because 'a' and 's' are different characters.
"racecar" is a palindrome because 'r', 'r' | 'a', 'a' | 'c', 'c' | and then e
"""
def palindrome_helper(word, start, end):
    if start == end:
        return True

    if word[start] != word[end]:
        return False

    if word[start] == word[end]:
        return palindrome_helper(word, start+1, end-1)

    

def palindrome(word):
    start = 0
    end = len(word) - 1
    
    return palindrome_helper(word, start, end)
    

r = palindrome("raceycar")
print(r)

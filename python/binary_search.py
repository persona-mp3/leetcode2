def binary_search(arr, start, end, target):
    if start > end:
        print(f"target not found")
        return

    # get the middle element from the array
    middle = (start+end) // 2
    if arr[middle] == target:
        print(f"target found at -> {middle} -> {arr[middle]}")
        return middle, arr[middle]

    elif arr[middle] > target :
        binary_search(arr, start, middle-1, target)

    else:
        binary_search(arr, middle+1, end, target)


nums = [1, 2, 3, 4, 9, 12, 213]
target = 5
binary_search(nums, 0, (len(nums)- 1), target)

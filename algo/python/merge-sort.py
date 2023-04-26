from math import ceil

arr = [5, 1, 4, 7, 3, 2, 6]

# Recursive function will return copy of sorted arr
def merge_sort(arr):
    # get middle index of arr
    mid = ceil(len(arr) / 2)

    # rucursion case check array size is more than midle index (check if there is one element)
    if mid < len(arr):

        # handle left part of array
        left = merge_sort(arr[:mid])

        # handle right part of array
        right = merge_sort(arr[mid:])

        # merge halfs
        arr = merge(left, right)

    # return sorted half/array ()
    return arr


# merge halfs
def merge(left, right):
    # init zero indexes for left and right array
    l = 0
    r = 0
    # init merged array
    arr = []

    # will compare one by one elements of left and right until one array finished 
    while l < len(left) and r < len(right):
        if left[l] <= right[r]:
            arr.append(left[l])
            l += 1
        else:
            arr.append(right[r])
            r += 1
    
    # handle remaining elements of left
    while l < len(left):
            arr.append(left[l])
            l += 1

    # handel remaining elements of right
    while r < len(right):
            arr.append(right[r])
            r += 1

    # return merged element
    return arr


merge_sort(arr)
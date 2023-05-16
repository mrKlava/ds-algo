'''Max-heap a.k.a binary heap implementation'''

array = []    # declare empty array for structure


def heapify(arr, n, i):
    '''
    Create binary heap from array

    arr -> array used to store binary heap
    n   -> size of array
    i   -> index of item
    '''
    largest = i     # current index is largest

    l = 2 * i + 1   # left node
    r = 2 * i + 2   # right node

    if l < n and arr[i] < arr[l]:   # if left node > largest -> swap
        largest = l

    if r < n and arr[i] < arr[r]:   # if right node > largest -> swap
        largest = r

    if largest != i:    # if found new largest -> swap nodes & heapify again
        arr[i], arr[largest] = arr[largest], arr[i]

        heapify(arr, n, largest)


def insert(arr, num):
    '''
    Insert new item to binary heap
    
    arr -> array used to store binary heap
    num -> new item :int
    '''
    size = len(arr)     # get len of current binary heap

    if size == 0:       # if binary heap is empty -> push new item
        arr.append(num)
    else:               # if not -> push new item and heapify all structure
        arr.append(num)
            # (size//2) - 1 => it is middle of array; range(start, stop, step)
        for i in range((size//2) - 1, -1, -1):
            heapify(arr, size, i)


def delete(arr, num):
    '''
    Remove item from binary heap
    
    arr -> array used to store binary heap
    num -> item :int
    '''
    size = len(arr)             # get len of current tree
    i = 0                       # init index (current element, starting from first)

    for i in range(0, size):    # use linear search to find index of item
        if num == arr[i]:       # ?? IF NOT FOUND THAN WHAT ??
            break
    
    arr[i], arr[size - 1] = arr[size - 1], arr[i]   # swap last node with target
    arr.remove(num)     # delete target node

    size = len(arr)     # redefine new tree length

    for i in range((size//2) - 1, -1, -1):      # heapify tree from deleted element
        heapify(arr, size, i)


# test = [3, 9, 2, 1, 4, 5]

# print(test)

# heapify(test, len(test), 0)

# print(test)

# insert(test, 7)

# print(test)


insert(array, 3)
insert(array, 9)
insert(array, 2)
insert(array, 1)
insert(array, 4)
insert(array, 5)
insert(array, 10)
insert(array, 12)

print ("Max-Heap array: " + str(array))


# insert(array, 3)
# insert(array, 4)
# insert(array, 9)
# insert(array, 5)
# insert(array, 2)

# print ("Max-Heap array: " + str(array))
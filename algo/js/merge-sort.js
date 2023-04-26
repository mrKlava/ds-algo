const arr = [5,3,2,7,6,1]

const mergeSort = (arr) => {
    const mid = Math.ceil(arr.length / 2)

    
    if (mid <= arr.length - 1) {
        
        // handle left
        mergeSort(arr.slice(0, mid))
        //handle right part
        mergeSort(arr.slice(mid))
        
    }

    console.log(arr)

    return arr
} 

mergeSort(arr)
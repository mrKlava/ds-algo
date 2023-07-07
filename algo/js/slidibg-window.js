const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]

/**
 * STATIC - FIXED LENGTH
 * Calculates sum of of fixed length subarray and returns max sum 
 * 
 * @param {[number]} arr - array of integers
 * @param {number} k - length of subarray to find sum
 * @returns {number} - the biggest sum of subarray
 */
const findMaxSubArray = (arr, k) => {
    let maxSum = 0
    let sum = 0

    for (let i = 0; i < arr.length; i++) {

        // add current element to sum
        sum += arr[i]

        // check if we have reached subarray length
        if (i >= k - 1) {
            // compare current sum with max sum and update max sum if needed
            maxSum = sum > maxSum ? sum : maxSum

            // substrate element which is out of subarray
            sum -= arr[i - (k - 1)]
        }
    }

    return maxSum
}


/**
 * DYNAMIC - FIXED SUM/TARGET
 * Finds length of smallest subarray sum of which equals to target
 * 
 * @param {[number]} arr - array of integers
 * @param {number} trg - target sum 
 * @returns {number} - length of smallest subarray  
 */
const findMinSubArray = (arr, trg) => {
    let len = arr.length
    let sum = 0
    let j = 0

    for (let i = 0; i < arr.length; i++) {
        // add current element to sum
        sum += arr[i]

        // if sum equal or greater than target shift first index of subarray
        while (sum >= trg) {
            // get current length of subarray
            const curLen = i - j + 1
            // compare lengths of current and previous if new is shorter update len
            len = len > curLen ? curLen : len 

            // subtract value of first element from subarray
            sum -= arr[j]
            // shift first index
            j++
        }
    }

    return len
}

console.log(findMaxSubArray(arr, 3))
console.log(findMinSubArray(arr, 8))

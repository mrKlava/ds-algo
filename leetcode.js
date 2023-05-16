// /**
//  * @param {Function[]} functions
//  * @return {Function}
//  */
// var compose = function(functions) {
//     const arr = functions

// 	return function(x) {
//         let val = x

//         for (let i = arr.length -1; 0 <= i; i--) {
//             val = arr[i](val)
//         }

//         return val
//     }
// };


// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9



// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// var once = function(fn) {
//     let executed = false
//     return function(...args){
//         const [a, b, c] = args
//         if (!executed) {
            
//             return fn(a, b, c)
//         } else {
//             return 
//         }
//     }
// };


// let fn = (a,b,c) => (a + b + c)
// let onceFn = once(fn)

// console.log(onceFn(1,2,3)); // 6
// console.log(onceFn(2,3,6)); // returns undefined without calling fn




// /**
//  * @param {Array} arr
//  * @return {Generator}
//  */
// var inorderTraversal = function*(arr) {
//     const values = arr.flat(Infinity).reverse()

//     while(values.length > 0) {
//         yield values.pop(values.length - 1)
//     }
// };


// // const gen = inorderTraversal([1, [2, 3]]);
// // console.log(gen.next().value) // 1
// // console.log(gen.next().value) // 2
// // console.log(gen.next().value) // 3


// const gen = inorderTraversal([[[[[]]]]]);
// console.log(gen.next().value) // 1
// console.log(gen.next().value) // 2
// console.log(gen.next().value) // 3




// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array[]}
//  */
// var chunk = function(arr, size) {
//     const resp = []

//     const n = Math.ceil(arr.length / size) 

//     for (let i = 0; i < n; i++) {
//         const s = i * size
//         const e = (i + 1) * size
//         resp.push(arr.slice(s, e))
//     }

//     return resp
// };

// // const arr = [1,2,3,4,5]
// // const size = 1
// // console.log(chunk(arr, size))

// const arr2 = [1,9,6,3,2]
// const size2 = 3
// console.log(chunk(arr2, size2))




// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function (n) {
//     return function () {
//         return n++
//     };
// };

// const counter = createCounter(10)

// console.log(counter())
// console.log(counter())
// console.log(counter())




// function initCounter(n) {
//     return (action, i) => {
//         if (action === 'plus') {
//             if (i) {
//                 return n += i
//             } else {
//                 return ++n
//             }
//         } else if (action === 'minus') {
//             if (i) {
//                 return n -= i
//             } else {
//                 return --n
//             }
//         }

//         return n
//     } 
// }


// const counter = initCounter(10)

// console.log(counter('plus'))
// console.log(counter('plus'))
// console.log(counter('minus'))
// console.log(counter('minus'))
// console.log(counter('plus', 200))
// console.log(counter('minus'))
// console.log(counter('minus'))
// console.log(counter('minus'))
// console.log(counter('minus'))
// console.log(counter('minus', 100))





// /**
//  * @param {number} millis
//  */
// async function sleep(millis) {
//    return new Promise((resolve) => {
//     setTimeout(() => resolve(), millis)
//    })
// }


// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100





// /**
//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  */
// var reduce = function(nums, fn, init) {
//  let val = init

//  for (let i = 0; i < nums.length; i++) {
//     val = fn(val, nums[i])
//  }

//  return val
// };

// function sum(accum, curr) { return accum + curr; }

// console.log(reduce([1,2,3,4], sum, 0))





// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var filter = function (arr, fn) {
//     const resp = []

//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) resp.push(arr[i])
//     }

//     return resp
// };

// function greaterThan10(n) { return n > 10; }
// console.log(filter([0, 10, 20, 30], greaterThan10))





// function fib() {
//     let i = 0
//     let seq = [0, 1]
    
//     while (i < 5) {
//         const size = seq.length - 1

//         let n = seq[size] + seq[size - 1] 
        
//         console.log(seq[i])

//         seq.push(n)
//         i++
//     }
// }

// fib()




// Array.prototype.last = function() {
//     const i = this.length - 1
//     console.log(i)
//     return i >=0 ? this[i] : -1 
// };


// const arr = [1,2,3]

// console.log(arr.last())




// /**
//  * @param {number} rowsCount
//  * @param {number} colsCount
//  * @return {Array<Array<number>>}
//  */
// Array.prototype.snail = function(rowsCount, colsCount) {
//     if (rowsCount * colsCount !== this.length) return []

//     const tmp = []
//     const arr = []
//     let first = 0

    

//     for (let i = 0; i < rowsCount; i++) {
//         arr.push([])
        
//         for (let j = 0; j < colsCount; j++) {

//             for (let i = 0; i < colsCount; i++) {
//                 const last = (i + 1) * rowsCount
//                 const sub = this.slice(first, last)
        
//                 if (i % 2 === 0) {
//                     tmp.push(sub)
//                 } else {
//                     tmp.push(sub.reverse())
//                 }
//                 first = last
//             }
//         }
//     }
//     console.log(tmp)
//     return arr
// }


// const arr = [1,2,3,4];
// // console.log(arr.snail(1,4)); // [[1,2,3,4]]


// let nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// let rowsCount = 5
// let colsCount = 4

// console.log(nums.snail(rowsCount,colsCount))




// /**
//  * @param {Function} fn
//  */
// function memoize(fn) {
//     let count = 0
//     // const cache = new Map()
//     const cache2 = {}

//     return function(...args) {

//         if (args.length === 0) return count

//         console.log (' ---------- Test ---------- ')

//         console.log(args)
//         console.log(cache2)
//         // console.log(cache.has(args))
//         console.log(count)

//         console.log(' ----------- END ---------- ')

//         const key = args.join(',')

//         if (key in cache2) {
//             return cache2[key]
//         } else {
//             const value = fn(...args)

//             cache2[key] = value
//             count++

//             return value
//         }

//         // if (args.length === 0) return count

//         // console.log (' ---------- Test ---------- ')

//         // console.log(args)
//         // console.log(cache)
//         // console.log(cache.has(args))
//         // console.log(count)

//         // console.log(' ----------- END ---------- ')

//         // if (cache.has(args)) {
//         //     return cache.get(args)
//         // } else {
//         //     const resp = fn(...args)
            
//         //     cache.set(args, resp)

//         //     count++

//         //     return resp
//         // }
//     }
// }


// let callCount = 0;

// const memoizedFn = memoize(function (a, b) {
// 	 callCount += 1;
//   return a + b;
// })

// console.log(memoizedFn(2, 3)) // 5
// console.log(memoizedFn(2, 3)) // 5
// console.log(memoizedFn(2, 3)) // 5

// console.log(memoizedFn())     // 1
// console.log(callCount)        // 1 










// /**
//  * @param {Function} fn
//  * @param {number} t
//  * @return {Function}
//  */
// var timeLimit = function(fn, t) {
// 	return async function(...args) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => reject("Time Limit Exceeded"), t)

//             fn(...args).then(resolve).catch(reject)
//         })
//     }
// };




// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);

// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 




// function test(fn, t) {
//     return async (...args) => {
//         return new Promise(async (resolve, reject) => {
//             const timeout =setTimeout(() => reject("Time Limit exceeded"), t)

//             try {
//                 const result = await fn(...args)
//                 resolve(result)
//             } catch (error) {
//                 reject(error)
//             }

//             clearTimeout(timeout)
//         })
//     }
// }

// const limited = test((t) => new Promise(resolve => setTimeout(resolve, t)), 100);
// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms





var TimeLimitedCache = function() {
    this.cache = []
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    
};


// Your TimeLimitedCache object will be instantiated and called as such:
var obj = new TimeLimitedCache()
obj.set(1, 42, 1000); // false
obj.get(1) // 42
obj.count() // 1


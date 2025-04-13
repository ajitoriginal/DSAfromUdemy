/*
The problem with time
---------------------
Different machines will record different times
The same machine will record different times
For fast algorithms, speed measurements may not be precise enough?
*/



// function addUpTo(n) {
//     let total = 0
//     for(let i = 1; i <=n; i++) {
//         total += i
//     }
//     return total
// }

// function addUpTo(n) {
//     return n * (n + 1) / 2
// }

// let t1 = performance.now()
// addUpTo(1000000000)
// let t2 = performance.now()
// console.log(`Time elapsed : ${(t2 - t1)/1000} seconds.`)
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(n){
    if (n <= 1) return 1
    return n * factorial(n - 1)
 }
 
 
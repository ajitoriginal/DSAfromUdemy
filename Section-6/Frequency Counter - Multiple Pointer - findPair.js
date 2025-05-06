function findPair (arr, n) {
    if (arr.length < 2) return false
    let i = 0
    let j = 1
    while (i < arr.length - 1) {
        let diff_one = arr[i] - arr[j]
        let diff_two = arr[j] - arr[i]
        if (diff_one == n || diff_two == n) return true
        j++
        if (j == arr.length) {
            i++
            j = i+1
        }
    }
    return false
}
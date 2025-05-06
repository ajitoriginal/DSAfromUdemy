function isSubsequence(str_one, str_two) {
    // good luck. Add any arguments you deem necessary.
    let i = 0
    for(let j = 0; j < str_two.length; j++) {
        if(str_one[i] == str_two[j]) {
            i++
        }
        if(i==str_one.length) return true
    }
    return false
  }
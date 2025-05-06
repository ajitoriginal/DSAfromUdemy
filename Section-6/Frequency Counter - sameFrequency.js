function sameFrequency(int_one, int_two){
    // good luck. Add any arguments you deem necessary.
    let str_one = String(int_one)
    let str_two = String(int_two)
    let lookup_one = {}
    for (let val of str_one) {
        lookup_one[val] = (lookup_one[val] || 0) + 1
    }
    
    for(let val of str_two) {
        if(!lookup_one[val]) {
            return false
        } else {
            lookup_one[val]--
        }
    }
    
    return true
    
  }
  
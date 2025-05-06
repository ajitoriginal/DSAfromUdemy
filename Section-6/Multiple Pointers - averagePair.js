function averagePair(arr, target){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length < 2) {
        return false
    }
    let i = 0, j = 1
    while(j < arr.length) {
        if((arr[i] + arr[j])/2 == target) {
            return true
        } else {
            if(j == arr.length-1) {
                i++
                j = i+1
            } else {
                j++
            }
        }
    }
    return false
  }
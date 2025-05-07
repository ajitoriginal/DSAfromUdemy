function linearSearch(arr, target){
    // add whatever parameters you deem necessary - good luck!
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }
    return -1
  }

  // Big O: O(n) worst case, O(1) best case
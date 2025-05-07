function binarySearch(arr, target){
    // add whatever parameters you deem necessary - good luck!
    let leftIndex = 0, rightIndex = arr.length - 1
    while(leftIndex <= rightIndex) {
        let midIndex = Math.round((leftIndex+rightIndex)/2)
        if(arr[midIndex] > target) {
            rightIndex = midIndex - 1
        } else if (arr[midIndex] < target ) {
            leftIndex = midIndex + 1
        } else {
            return midIndex
        }
    }
    return -1
  }

  // Big O: O(log n) worst case, O(1) best case
  // It works only on sorted arrays
  // eliminates half of the array in each iteration
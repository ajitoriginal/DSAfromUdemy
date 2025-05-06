function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let i = 0
    //create pointers to track values
    if(arr.length == 0) return 0
    
    //loop over the arr from index 1
      //if current value is not same as previous, increment unique by 1
      for(let j = 1; j < arr.length; j++) {
          if(arr[i] !== arr[j]) {
              i++
              arr[i] = arr[j]
          }
          
      }
    return i+1
  }
function maxSubarraySum(arr, n){
    // add whatever parameters you deem necessary - good luck!
    //if n is greater than arr length return null
    if(n > arr.length) {
        return null
    }
    //store max value from 1st index till n-1 index as first window
    let max = 0
    for(let i = 0; i < n; i++) {
        max+= arr[i]
    }
    let temp = max
    //write a loop, which will store temp value with next window
    for(let j = n; j < arr.length; j++) {
      //if temp is greater than max, update max with temp
      console.log(arr[j], arr[j-n])
      temp += arr[j] - arr[j-n]
      max = Math.max(temp, max)
        
    }
    //return max value
    return max
    
  }
  
  // function maxSubarraySum(arr, num){
  //     if (arr.length < num) return null;
   
  //     let total = 0;
  //     for (let i=0; i<num; i++){
  //       total += arr[i];
  //     }
  //     let currentTotal = total;
  //     for (let i = num; i < arr.length; i++) {
  //       currentTotal += arr[i] - arr[i-num];
  //       total = Math.max(total, currentTotal);
  //     }
  //     return total;
  // }
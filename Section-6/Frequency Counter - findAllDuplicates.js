function findAllDuplicates(arr){
    // add whatever parameters you deem necessary - good luck!
    let result = []
    let lookup = {}
    for(let i = 0; i < arr.length; i++) {
        let element = arr[i]
        lookup[element] = (lookup[element] || 0) + 1
    }
    for(let key in lookup) {
        if(lookup[key] > 1) {
            result.push(parseInt(key))
        }
    }
    
    return result
  }
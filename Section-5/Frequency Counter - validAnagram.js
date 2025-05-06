function validAnagram(str_one, str_two){
    // add whatever parameters you deem necessary - good luck!
    //if both strings length is not same, return false
    if(str_one.length !== str_two.length) {
        return false
    }
    //store str_one chars frequency in obj_one
    let obj_one = {}
    for(let val of str_one) {
        obj_one[val] = (obj_one[val] || 0) + 1
    }
    //store str_two chars frequency in obj_two
    let obj_two = {}
    for(let val of str_two) {
        obj_two[val] = (obj_two[val] || 0) + 1
    }
    //loop over obj_one keys & check if keys exists in obj_two
    for(let key in obj_one) {
      //if key value doesn't match in both objects, return false
      if(obj_two[key] !== obj_one[key]) return false
    }
      //else return true
      return true
  }
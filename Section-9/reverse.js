function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if (!str.length) return ''
    return str[str.length - 1] + reverse(str.slice(0,str.length - 1))
    
  }
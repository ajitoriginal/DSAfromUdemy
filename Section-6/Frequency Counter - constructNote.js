function constructNote(msg, letters){
    // add whatever parameters you deem necessary - good luck!
    let lookup = {}
    for(let i = 0; i < letters.length; i++) {
        let currentLetter = letters[i]
        lookup[currentLetter] = (lookup[currentLetter] || 0) + 1
    }
    for(let j = 0; j < msg.length; j++) {
        let currentChar = msg[j]
        if(lookup[currentChar] > 0) {
            lookup[currentChar]-=1
        } else {
            return false
        }
    }
    return true
  }
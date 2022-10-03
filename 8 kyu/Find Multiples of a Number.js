function findMultiples(integer, limit) {
    let a = []
    for(let i = 1; i < limit+1; i++){
      if(i%integer === 0){
        a.push(i)
      }
    }
      return a
    }
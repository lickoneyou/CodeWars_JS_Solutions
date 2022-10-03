function powersOfTwo(n){
    let a = []
    for (let i = 0; i < n+1; i++){
      a.push(2**i)
    }
    return  a
  }
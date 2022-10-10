function nthFibo(n) {
    let a =[]
    let b = n
    let c =[]
    for(let i =0; i < b;i++){
        a.push(i)
    }
    for(let j =0; j < a.length;j++){
    if (j === 0){
        c.push(0)
    }
    if(j===1){
        c.push(1)
    }
    if(j===2){
        c.push(1)
    }
    if(j>2){
        c.push(c[j-1]+c[j-2])
    }
    }
      return n =0? 0: c[b-1]
      }
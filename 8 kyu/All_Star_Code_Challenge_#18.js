function strCount(str, letter){  
    let a = str.split('')
    let b = []
    for( let i = 0; i < a.length; i++){
      if(a[i] === letter){
        b.push(a[i])
      }
    }
    return b.length
  }
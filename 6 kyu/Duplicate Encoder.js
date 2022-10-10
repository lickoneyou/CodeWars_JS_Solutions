function duplicateEncode(word){
    let z = word.toUpperCase()
      let a = z.split('')
      let b = []
      for(let i = 0; i < a.length; i++){
      if(a.indexOf(a[i]) == a.lastIndexOf(a[i])){
          b.push('(')
      }
      else{
        b.push(')') 
      }
      }
  return b.join('')
  }
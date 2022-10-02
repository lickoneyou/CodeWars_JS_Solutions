var countSheep = function (num){
    let a = []
    if (num === 0) {
      return ""
    }
   for (let i = 0; i < num; i++){
   a.push(i+1+' sheep...')
   }
    return a.join('')
  }
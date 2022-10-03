function removeEveryOther(arr){
    let a = [] 
    for (let i = 0; i < arr.length; i++) {
      if(i %2 <= 0){
        a.push(arr[i])
      }
    }
      return a
  }
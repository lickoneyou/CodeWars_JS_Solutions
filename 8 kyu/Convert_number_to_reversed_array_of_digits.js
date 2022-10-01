function digitize(n) {
    let a = String(n)
   return a.split('').map(m => Number(m)).reverse()
  }
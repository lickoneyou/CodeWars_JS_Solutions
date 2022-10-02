function countBy(x, n) {
    let z = [];
  for (let i = 0; i< n; i++){
    z.push(i)
  }
   return z.map(m=>(m+1)*x)
  }
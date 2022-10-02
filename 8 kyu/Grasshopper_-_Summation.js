var summation = function (num) {
    let a = []
    for (let i= 0; i < num; i++) {
      a.push(i+1)
    }
     return a.reduce((a,b)=>a+b)
    }
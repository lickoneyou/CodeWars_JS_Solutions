function getAverage(marks){
    let  a = marks.reduce((a,b) => (a+b)) /marks.length
    return Math.floor(a)
    
  }
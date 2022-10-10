function isIsogram(str){
    let z = str.toUpperCase()
     let a = z.split('')
     let b = []
     let c =[]
   for(let i = 0; i < a.length; i++){
     if (a.indexOf(a[i]) === a.lastIndexOf(a[i])){
       b.push(a[i])
     }
     else {
     c.push(a[i])
     }
   }
   return a.length === b.length
   } 
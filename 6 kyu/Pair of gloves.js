function numberOfPairs(gloves){
    let a2 = []
    let b2 = []
    let c2 = []
     let d2 = []
     let e2 = []
     let q21 = []
     let z2 = []
 let a = []
 let b = []
 let c = []
 let d = []
 let e = []
  let q = []
  let z = []
   let q1 = [] 
     let q2 = []
     let q3 = []
     let q4 = []
     let q5 = []
     let q6 = []
     let q7 = []
     let q8 = []
     let q9 = []
     let q10 = []
 for (let i =0; i < gloves.length; i++){
     if(gloves[i] === "red"){
         a.push(gloves[i])
     }
     
     if(gloves[i] === "Red"){
         a2.push(gloves[i])
     }
     
   if(gloves[i] === "green"){
         c.push(gloves[i])
     }
     
     if(gloves[i] === "Green"){
         c2.push(gloves[i])
     }
     
     
     
   if(gloves[i] === "blue"){
         d.push(gloves[i])
     }
     
     if(gloves[i] === "Blue"){
         d2.push(gloves[i])
     }
     
     
     if(gloves[i] === 'black'){
         e.push(gloves[i])
     }
     
     if(gloves[i] === 'Black'){
         e2.push(gloves[i])
     }
     
     if(gloves[i] === 'purple'){
         q.push(gloves[i])
     }
     
     if(gloves[i] === 'Purple'){
         q21.push(gloves[i])
     }
     
     if(gloves[i] === 'gray'){
         z.push(gloves[i])
     }
     
     if(gloves[i] === 'Gray'){
         z2.push(gloves[i])
     }
     
     
     if(gloves[i] === 'Aqua'){
         q1.push(gloves[i])
     }
     
     if(gloves[i] === 'Fuchsia'){
         q2.push(gloves[i])
     }
     
     if(gloves[i] === 'Lime'){
         q3.push(gloves[i])
     }
     
      if(gloves[i] === 'Maroon'){
         q4.push(gloves[i])
     }
     
     if(gloves[i] === 'Navy'){
         q5.push(gloves[i])
     }
     
     if(gloves[i] === 'Olive'){
         q6.push(gloves[i])
     }
     
     if(gloves[i] === 'Silver'){
         q7.push(gloves[i])
     }
     
     if(gloves[i] === 'Teal'){
         q8.push(gloves[i])
     }
     
     if(gloves[i] === 'White'){
         q9.push(gloves[i])
     }
     
      if(gloves[i] === 'Yellow'){
         q10.push(gloves[i])
     }
     
     
     
     
     
 }
 let p =[]
 console.log(a)
  console.log(a2)
 console.log(b)
  console.log(b2)
 console.log(c)
  console.log(c2)
 console.log(d)
 console.log(d2)
 console.log(e)
 console.log(e2)
 console.log(q)
 console.log(q21)
 console.log(z)
 console.log(z2)
  console.log(q1)
  console.log(q2)
  console.log(q3)
  console.log(q4)
  console.log(q5)
  console.log(q6)
  console.log(q7)
  console.log(q8)
  console.log(q9)
  console.log(q10)
 if(a.length >= 2 && a.length%2 == 0){
     p.push(Math.round(a.length/2))
 }
 
  if(a.length >= 2 && a.length%2 > 0){
     p.push(Math.round((a.length-1)/2) )
 }
 
  if(a2.length >= 2 && a2.length%2 == 0){
     p.push(Math.round(a2.length/2))
 }
 
  if(a2.length >= 2 && a2.length%2 > 0){
     p.push(Math.round((a2.length-1)/2))
 }
 
  if(b.length >= 2 && b.length%2 == 0){
     p.push(Math.round(b.length/2))
 }
 
 if(b.length >= 2 && b.length%2 > 0){
     p.push(Math.round((b.length-1)/2))
 }
 
 if(b2.length >= 2 && b2.length%2 == 0){
     p.push(Math.round(b2.length/2))
 }
 
  if(b2.length >= 2 && b2.length%2 > 0){
     p.push(Math.round((b2.length-1)/2))
 }
 
  if(c.length >= 2 && c.length%2 == 0){
     p.push(Math.round(c.length/2) )
 }
 
 if(c.length >= 2 && c.length%2 > 0){
     p.push(Math.round((c.length-1)/2))
 }
 
  if(c2.length >= 2 && c2.length%2 == 0){
     p.push(Math.round(c2.length/2))
 }
 
 if(c2.length >= 2 && c2.length%2 > 0){
     p.push(Math.round((c2.length-1)/2))
 }
 
 
 
 if(d.length >= 2 && d.length%2 == 0){
     p.push(Math.round(d.length/2))
 }
 
 if(d.length >= 2 && d.length%2 > 0){
     p.push(Math.round((d.length-1)/2))
 }
 
 if(d2.length >= 2 && d2.length%2 == 0){
     p.push(Math.round(d2.length/2))
 }
 
 if(d2.length >= 2 && d2.length%2 > 0){
     p.push(Math.round((d2.length-1)/2))
 }
 
  if(e.length >= 2 && e.length%2 == 0){
     p.push(Math.round(e.length/2))
 }
 
 if(e.length >= 2 && e.length%2 > 0){
     p.push(Math.round((e.length-1)/2))
 }
 
 if(e2.length >= 2 && e2.length%2 == 0){
     p.push(Math.round(e2.length/2))
 }
 
  if(e2.length >= 2 && e2.length%2 > 0){
     p.push(Math.round((e2.length-1)/2))
 }
 
   if(q.length >= 2 && q.length%2 == 0){
     p.push(Math.round(q.length/2))
 }
 
  if(q.length >= 2 && q.length%2 > 0){
     p.push(Math.round((q.length-1)/2))
 }
 
 if(q21.length >= 2 && q21.length%2 == 0){
     p.push(Math.round(q21.length/2))
 }
 
 if(q21.length >= 2 && q21.length%2 > 0){
     p.push(Math.round((q21.length-1)/2))
 }
 
 if(z.length >= 2 && z.length%2 == 0){
     p.push(Math.round(z.length/2) )
 }
 
 if(z.length >= 2 && z.length%2 > 0){
     p.push(Math.round((z.length-1)/2))
 }
 
  if(z2.length >= 2 && z2.length%2 == 0){
     p.push(Math.round(z2.length/2))
 }
 
 if(z2.length >= 2 && z2.length%2 > 0){
     p.push(Math.round((z2.length-1)/2))
 }
 
  if(q1.length >= 2 && q1.length%2 == 0){
     p.push(Math.round(q1.length/2))
 }
 
  if(q1.length >= 2 && q1.length%2 > 0){
     p.push(Math.round((q1.length-1)/2))
 }
 
  if(q2.length >= 2 && q2.length%2 == 0){
     p.push(Math.round(q2.length/2))
 }
 
   if(q2.length >= 2 && q2.length%2 > 0){
     p.push(Math.round((q2.length-1)/2))
 }
 
   if(q3.length >= 2 && q3.length%2== 0){
     p.push(Math.round(q3.length/2))
 }
 
   if(q3.length >= 2 && q3.length%2 > 0){
     p.push(Math.round((q3.length-1)/2))
 }
 
  if(q4.length >= 2 && q4.length%2 == 0){
     p.push(Math.round(q4.length/2))
 }
 
 if(q4.length >= 2 && q4.length%2 > 0){
     p.push(Math.round((q4.length-1)/2))
 }
 
    if(q5.length >= 2 && q5.length%2 == 0){
     p.push(Math.round(q5.length/2))
 }
 
 if(q5.length >= 2 && q5.length%2 > 0){
     p.push(Math.round((q5.length-1)/2))
 }
 
  if(q6.length >= 2 && q6.length%2 == 0){
     p.push(Math.round(q6.length/2))
 }
 
 if(q6.length >= 2 && q6.length%2 > 0){
     p.push(Math.round((q6.length-1)/2))
 }
 
   if(q7.length >= 2 && q7.length%2 == 0){
     p.push(Math.round(q7.length/2))
 }
 
 if(q7.length >= 2 && q7.length%2 > 0){
     p.push(Math.round((q7.length-1)/2))
 }
 
  if(q8.length >= 2 && q8.length%2 == 0){
     p.push(Math.round(q8.length/2))
 }
 
 if(q8.length >= 2 && q8.length%2 > 0){
     p.push(Math.round((q8.length-1)/2) )
 }
 
    if(q9.length >= 2 && q9.length%2 == 0){
     p.push(Math.round(q9.length/2))
 }
 
 if(q9.length >= 2 && q9.length%2 > 0){
     p.push(Math.round((q9.length-1)/2))
 }
 
  if(q10.length >= 2 && q10.length%2 == 0){
     p.push(Math.round(q10.length/2))
 }
 
  if(q10.length >= 2 && q10.length%2 > 0){
     p.push(Math.round((q10.length-1)/2))
 }
 
return p.length< 1? 0:p.reduce((a,b) => a+b)
}
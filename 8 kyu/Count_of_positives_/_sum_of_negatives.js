function countPositivesSumNegatives(input) {
    let arr = [0, 0]
    if (input === null){
           return []
         }
     if (input.length <= 0){
           return []
         }
     for(let i = 0; i < input.length; i++){
          if (input[i] > 0){
   arr[0] = arr[0] +1
   }
   if(input[i] < 0) {
     arr[1] = arr[1] + input[i]
   }
     }
   return arr
   }
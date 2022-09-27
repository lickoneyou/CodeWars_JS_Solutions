function findAverage(array) {
    let a = 0;
      if (array.length === 0) {
        return 0
      }
      else{
      for(let i=0; i < array.length; i++){
        a = a + array[i]
      }
      return a / array.length
        }
    }
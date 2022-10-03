function squareOrSquareRoot(array) {
    return array.map(m => Math.sqrt(m) === Math.floor(Math.sqrt(m))? Math.sqrt(m) : m**2);  
  }
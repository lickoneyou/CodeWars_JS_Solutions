function unluckyDays(year){
    let count13 = 0;
  for ( let i = 0; i < 12; i++ ){
    let data = new Date(year, i, 13)
    if(data.getDay() === 5){
      count13++
    }
  }
    return count13
  }
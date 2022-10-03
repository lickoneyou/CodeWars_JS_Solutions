var humanYearsCatYearsDogYears = function(humanYears) {
    let cat =0
    let dog = 0
    for(let i = 0; i < humanYears+1; i++){
      if(humanYears === 1){
        cat = 15
        dog = 15
      }
      if(humanYears === 2){
        cat = 24
        dog = 24
      }
      if(humanYears > 2){
        cat = 24 + ((humanYears*4) - 8)
        dog = 24 + ((humanYears*5) - 10)
      }
    }
      return [humanYears,cat,dog];
    }
    
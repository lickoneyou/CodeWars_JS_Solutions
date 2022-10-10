function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let d = new Date(currentDate)
    let c = new Date(expirationDate)
      return enteredCode === correctCode && d <= c
    }
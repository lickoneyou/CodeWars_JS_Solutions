function pillars(numPill, dist, width) {
    if(numPill == 1){
      return 0
      }
    if(numPill == 2){
      return dist*100
    }
    else{
      return ((numPill-1)*dist)*100 + ((numPill-2)*width)
      }
  } 8250
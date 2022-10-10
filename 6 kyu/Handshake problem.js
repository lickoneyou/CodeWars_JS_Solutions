function getParticipants(handshakes){
    if (handshakes === 0) return 0
    if (handshakes === 1) return 2
    if (handshakes === 3) return 3
    for ( let i = 3; i <= handshakes; i++){
      if (i*(i-1)/2 >= handshakes){
        return i
      }
      }
  }
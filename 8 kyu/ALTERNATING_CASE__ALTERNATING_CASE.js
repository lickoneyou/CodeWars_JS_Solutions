String.prototype.toAlternatingCase = function () {
    let a = this.split('')
    let b =[]
    for(let i = 0; i < a.length; i++){
      if(this[i] != this[i].toUpperCase()){
        b.push(this[i].toUpperCase())
      }
      if(this[i] === this[i].toUpperCase()){
        b.push (this[i].toLowerCase())
      }
    }
    return b.join('')
  }
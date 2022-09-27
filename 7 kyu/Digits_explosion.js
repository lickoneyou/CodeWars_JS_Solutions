function explode(s) {
    return s.split('').map(item => {
      return item.repeat(item)
    }).join('');
  }
function head(arr) {
    return arr[0]
  }
  
  function tail(arr) {
    if(arr.length > 0) {
    return arr.slice(1)
    }
    else {
      return []
    }
  }
  
  function init(arr) {
    return arr.slice(0, -1)
  }
  
  function last(arr) {
    return arr[arr.length - 1]
  }
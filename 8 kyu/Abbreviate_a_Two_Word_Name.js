function abbrevName(name){
    let z =[name[0]]
    let b = name.split('')
    for(let i = 0; i< b.length; i++){
        if(b[i] === ' ')
        z.push(b[i+1])
    }
    return z.join('.').toUpperCase()
    }
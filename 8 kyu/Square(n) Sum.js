function squareSum(num){
    let coun = 0;
    let a = num.map(m => m*m)
    for (let i = 0; i < a.length; i++){
        coun = coun + a[i]
    }
     return coun
}
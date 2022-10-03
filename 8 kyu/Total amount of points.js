function points(games) {
    let count = 0
 for(let i = 0; i < games.length; i++){
    if(games[i][0] > games[i].slice(-1)){
        count = count + 3
    }
    
    if(games[i][0] === games[i].slice(-1)){
        count = count + 1
    }
    
 }
return count;
}
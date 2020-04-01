var getDices =  (arg) => {
    const dices = [];
    for (i=0; i<arg; i++){
        dices.push(Math.floor(Math.random() * 6 ) + 1);
    }
    return dices;
}

exports.risikoGame = function () {
    let counterPlayer = 0;
    let counterPlayer2 = 0;

    let player = getDices(3);
    let player2 = getDices(3);
    const p = [...player];
    const p2 = [...player2];
    let maxPlayer, maxPlayer2;

    for(valueDice of player) {
        
        maxPlayer = Math.max(...p);
        maxPlayer2 = Math.max(...p2);
        if (maxPlayer > maxPlayer2) {
            counterPlayer++
        } else if(maxPlayer2 > maxPlayer) {
            counterPlayer2++
        }
            p.splice(p.indexOf(maxPlayer), 1);
            p2.splice(p2.indexOf(maxPlayer2), 1);
    }
    return counterPlayer > counterPlayer2 
        ? {
            defender: player,
            attacker: player2,
            result: 'defender win!'
        }
        : counterPlayer2 > counterPlayer
        ? {
            defender: player,
            attacker: player2,
            result: 'attacker win!'
        }
        : {
            defender: player,
            attacker: player2,
            result: 'defender win! (Draw)'
        }
}
console.log(exports.risikoGame());
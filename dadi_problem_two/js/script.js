"use strict";

//PROBLEMA 2: GENERA UN NUMERO RANDOM DA 1 A 6 (DADI) SIA PER IL GIOCATORE CHE
//PER IL COMPUTER, STABILISCI IL VINCITORE CHE FA IL PUNTEGGIO PIU ALTO.

let button = document.getElementById('submit').addEventListener('click', function(){

    let you_score = (Math.floor(Math.random() * 6) + 1);
        document.getElementById('you_score').innerText = (you_score);
        console.log (Math.floor(you_score));
        
    let computer_score = (Math.floor(Math.random() * 6) + 1);
        document.getElementById('computer_score').innerText = (computer_score);
        console.log(Math.floor(computer_score));

    let message = "Un Pareggio! Ritenta la prossima volta sarai piu' fortunato";

    if(you_score > computer_score){
        message = ("Complimenti hai Vinto!");
    } 
    else if (you_score < computer_score){
        message = ("Ci dispiace hai perso, il Computer questa volta ti ha battuto!");
    } 
    
    document.getElementById('message_print').innerText = message;
});
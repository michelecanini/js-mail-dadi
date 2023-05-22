//PROBLEMA 2: GENERA UN NUMERO RANDOM DA 1 A 6 (DADI) SIA PER IL GIOCATORE CHE
//PER IL COMPUTER, STABILISCI IL VINCITORE CHE FA IL PUNTEGGIO PIU ALTO.

let button = document.getElementById('submit').addEventListener('click', function(){

    let you_score = (Math.random() * 6) + 1;
        console.log (Math.floor(you_score));
        
    let computer_score = (Math.random() * 6) + 1;
        console.log(Math.floor(computer_score));

    if(you_score > computer_score){
        message = ('Complimenti hai Vinto');

    } else if(you_score < computer_score){
        message = ('Ci dispiace hai perso, il Computer questa volta ti ha battuto!');

    } else if (you_score === computer_score);{
        message = ("Un Pareggio! Ritenta la prossima volta sarai piu' fortunato");
    }

    document.getElementById('message').innerText = message;

});

//document.getElementById('you_score').innerHTML += Math.floor(you_score);

//document.getElementById('computer_score').innerHTML += Math.floor(computer_score);
//PROBLEMA 1: CHIEDI ALL'UTENTE LA SUA EMAIL, EFFETTUA UN CONTROLLO E STAMPA
//L'ESITO ATTRAVERSO UN MESSAGGIO.

let user_list = ['utente1email@lista.it', 'utente2email@lista.it', 'utente3email@lista.it', 'utente4email@lista.it', 'utente5email@lista.it', 'utente6email@lista.it', 'utente7email@lista.it', 'utente8email@lista.it', 'utente9email@lista.it', 'utente10email@lista.it']

let button = document.getElementById('submit').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let flag = false;

    for(let i=0; i<user_list.length; i++){
        if(user_list[i] === email){
            flag = true; 
        }
    }

    if(flag === true){
        message = ('Accesso avvenuto, ti sei loggato correttamente!');
        console.log('Accesso avvenuto, ti sei loggato correttamente!')
    }
    else{
        message = ('Non puoi accedere, la tua email non risulta tra quelle registrate!');
        console.log('Non puoi accedere, la tua email non risulta tra quelle registrate!')
    }
    document.getElementById('message').innerText = message;
});
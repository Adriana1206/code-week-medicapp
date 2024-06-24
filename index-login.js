/*
 Usarname: paziente
 Password: 1234

 Usarname: medico
 Password: 1234
*/

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    let isLogged = false;

    
        if (username === 'paziente' && password === '1234'){
            let paziente = {
                username: username,
                role: 'paziente'
            }
            isLogged = true;
            localStorage.setItem("utente", JSON.stringify(paziente));
            window.location.href = './html/prenotazione.html';
        }
        if (username === 'medico' && password === '1234'){
            let medico = {
                username: username,
                role: 'medico'
            }
            isLogged = true;
            localStorage.setItem("utente", JSON.stringify(medico));
            window.location.href = './html/medicApp.html';
            
        }

        if(!isLogged){
            errorMessage.textContent = 'Nome utente o password errati.';
        }
    
});
    


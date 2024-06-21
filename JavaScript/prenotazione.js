const exit = document.querySelector('.exit');
exit.addEventListener('click', (event)=>{
    console.log("ciao");
    event.preventDefault();
    localStorage.removeItem('utente');
    window.location.href = "../index.html";
});


let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0'); 
let year = today.getFullYear()
// Format la data nel formato (YYYY-MM-DD)
let todayFormatted = year + '-' + month + '-' + day
// Imposta la data minima per l'input
document.getElementById('date').setAttribute('min', todayFormatted);



const POST = async (appointment) => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: appointment,
                userId: 1,
                completed: false
            }),
        });

        if (!res.ok) {
            throw new Error('Errore durante l\'invio dei dati');
        }

        document.getElementById('message').textContent = "Appuntamento inserito";
        document.getElementById('message').className = "green";
        setTimeout(() => {
            document.getElementById('message').textContent = '';
        }, 3000);
    } catch (error) {
        console.error(error);
        document.getElementById('message').textContent = "Errore durante l'inserimento dell'appuntamento";
        document.getElementById('message').className = "red";
        setTimeout(() => {
            document.getElementById('message').textContent = '';
        }, 3000);
    }
};


document.getElementById('appointmentForm').addEventListener('submit', (event)=>{
    event.preventDefault();
    let date = document.getElementById('date').value;
    let appointment = document.getElementById('appointmentType').value;
    console.log(appointment);

    POST(appointment);
});
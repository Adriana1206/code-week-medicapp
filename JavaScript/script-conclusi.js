import { fetchAndUpdateData } from "./map.js";


const conclusi = document.querySelector('.elenco-conclusi');
const loadingSpinner = document.getElementById('loading-spinner');

const GET = async function() {
  try {
    loadingSpinner.style.display = 'block';
    const updatedData = await fetchAndUpdateData();
    let flag = false;
    updatedData.forEach(e => {
      if (e.completed) {
        flag = true;
        const divEleFalse = document.createElement('div');
        divEleFalse.className = 'divP';
        const eleFalse = document.createElement('p');
        eleFalse.textContent = `Data: ${e.randomDate}`;
        const app = document.createElement('p');
        app.textContent = `Dettagli appuntamento: ${e.title}`;
        const priority = document.createElement('p');
        priority.textContent = `Priorità: ${e.priority}`;

        
        switch (e.priority) {
            case 1:
              priority.className = 'priority-red';
              break;
            case 2:
              priority.className = 'priority-orange';
              break;
            case 3:
              priority.className = 'priority-yellow';
              break;
            case 4:
              priority.className = 'priority-green';
              break;
          }

        divEleFalse.append(eleFalse, priority, app);
        conclusi.append(divEleFalse); 
      } 
      if(!flag){
        document.getElementById('messaggio').textContent = "Nessun appuntamento";
      }else{
        document.getElementById('messaggio').textContent = '';
      }
    });

  } catch (error) {
    console.log(error);
  }finally {
    loadingSpinner.style.display = 'none'; 
  }
};

GET();


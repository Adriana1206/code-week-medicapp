import {getTodayDateString} from "./date.js";
import { fetchAndUpdateData } from "./map.js";

const futuri = document.querySelector('.elenco-futuri');
const loadingSpinner = document.getElementById('loading-spinner');

const GET = async function() {
  try {
    loadingSpinner.style.display = 'block';
    const updatedData = await fetchAndUpdateData();
    const todayDateString = getTodayDateString();
    let flag = false;
    updatedData.forEach((e) => {
      if (!e.completed) {
        if (e.dateCompleted != todayDateString) {
          flag = true;
          console.log("Adding to today:", e);
          const divEleTrueToday = document.createElement("div");
          divEleTrueToday.className = "divP";
          const eleTrueToday = document.createElement("p");
          eleTrueToday.textContent = `Data: ${e.dateCompleted}`;
          const priority = document.createElement("p");
          priority.textContent = `Priorità: ${e.priority}`;

          
        // Aggiungi la classe per il colore in base alla priorità
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

          const app = document.createElement("p");
          app.textContent = `Dettagli appuntamento: ${e.title}`;
          divEleTrueToday.append(eleTrueToday, priority, app);
          futuri.append(divEleTrueToday);
        }
        if(!flag){
          document.getElementById('messaggio').textContent = "Nessun appuntamento";
        }else{
          document.getElementById('messaggio').textContent = '';
        }
      }
    });

    
  } catch (error) {
    console.log(error);
  }finally {
    loadingSpinner.style.display = 'none'; 
  }
};
  
const todayDateString = getTodayDateString();
console.log(todayDateString);
GET();


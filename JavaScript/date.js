// Funzione per aggiungere una data per gli appuntamenti conclusi quando `completed` è true
/*
  Gli appuntamenti conclusi possono avere una data che va dal 1 gennaio 2024 fino al giorno 
  precedente alla data attuale 
*/
function addDateCompletedTrue(data) {
    const startDate = new Date('2024-01-01'); 
    const endDate = new Date(); 
    const dateDifference = endDate.getTime() - startDate.getTime();
    const randomOffset = Math.floor(Math.random() * dateDifference);
    const randomDate = new Date(startDate.getTime() + randomOffset);
    const formattedDate = `${randomDate.getDate().toString().padStart(2, '0')}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getFullYear()}`;
  
    return {
      ...data,
      randomDate: formattedDate 
    };
  }
  
  // Funzione per aggiungere una data per gli appuntamenti non conclusi quando `completed` è false
  /*
    Gli appuntamenti non conclusi possono avere una data che dalla data odierna al 31 dicembre 2024
  */
  function addDateCompletedFalse(data) {
    const today = new Date();
    const endDate = new Date('2024-12-31');
    const dateDifference = endDate.getTime() - today.getTime();
    const randomOffset = Math.floor(Math.random() * dateDifference);
    const randomDate = new Date(today.getTime() + randomOffset);
    const formattedRandomDate = `${randomDate.getDate().toString().padStart(2, '0')}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getFullYear()}`;
    
    // Decide se usare la data odierna o una data random
    const useToday = Math.random() < 0.1; // 10% di probabilità di usare la data odierna
    const formattedDate = useToday ? 
      `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getFullYear()}` :
      formattedRandomDate;
  
    return {
      ...data,
      dateCompleted: formattedDate 
    };
  }
  
  // Funzione per ottenere la data odierna formattata come stringa
  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  export{
    addDateCompletedTrue,
    addDateCompletedFalse,
    getTodayDateString
  }
// Funzione per aggiungere una priorità

function addPriority(data) {
  //mappatura dell'array originale
    return data.map((todo) => {
      const priority = Math.floor(Math.random() * 4) + 1;
      return {
        ...todo,  
        priority: priority,
      };
    });
  }


  export{
    addPriority
  }
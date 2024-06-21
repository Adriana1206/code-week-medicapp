import { addPriority } from "./priority.js";
import { addDateCompletedTrue, addDateCompletedFalse } from "./date.js";

export const fetchAndUpdateData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
  
    
    const updatedPriority = addPriority(data);
  
    //mappatura dell'array originale
    return updatedPriority.map(e => {
      if (e.completed) {
        return addDateCompletedTrue(e);
      } else {
        return addDateCompletedFalse(e);
      }
    });
  };
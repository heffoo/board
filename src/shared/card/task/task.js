import React from "react";
import "./task.scss";

export function Task({ setChecked, deleteTask, cardId, task, index }) {
  return (
 
      <div className={task.completed ? 'btn-task-completed' : 'task'}>
       <input
              type="checkbox"
              className='btn-check-task'
              checked={task.completed}
              onChange={() => setChecked(cardId, task.id, task.completed)}
              />
               <p>{task.value}</p>
        <div> 
        
             
        <button className="btn-delete-task" onClick={() => deleteTask(cardId, task.id)}>
          ×
        </button></div>
      </div>

  );
}

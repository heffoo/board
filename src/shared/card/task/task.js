import React from "react";
import "./task.scss";

export function Task({ setChecked, deleteTask, cardId, task, index }) {
  return (
 
      <div className="task">{console.log(task) }
        <p>{task.value}</p>
        <input
              type="checkbox"
              className='btn-check-task'
              checked={task.completed}
              onChange={() => setChecked(cardId, task.id, task.completed)}
              />
              {console.log(task.completed) }
        <button className="btn-delete-task" onClick={() => deleteTask(cardId, task.id)}>
          ×
        </button>
      </div>

  );
}

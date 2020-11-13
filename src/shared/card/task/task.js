import React from "react";
import "./task.scss";

export function Task({ deleteTask, cardId, task }) {
  return (
 
      <div className="task">
        <p>{task.value}</p>
        <button className="btn-delete-task" onClick={() => deleteTask(cardId, task.id)}>
          ×
        </button>
      </div>

  );
}

import React, {useState} from "react";
import "./task.scss";

export function Task({ deleteTask, cardId, task}) {
  const [isCompleted, setCompleted] = useState(false)
 
  return (
 
      <div className={!isCompleted ? "task" : "task-completed"}>
        <p>{task.value}</p>
        <button onClick={() => setCompleted(!isCompleted)}>complete</button>

        <button className="btn-delete-task" onClick={() => deleteTask(cardId, task.id)}>
          ×
        </button>
      </div>

  );
}

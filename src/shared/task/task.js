import React from "react";
import "../cardInfo.scss";

export function Task({ deleteTask, cardId, task }) {
    console.log(cardId, task.id);
  return (
    <div className="taskInfo">
      <div className="task">
        <p>{task.value}</p>
        <button className="btn-delete-task" onClick={() => deleteTask(cardId, task.id)}>
          ×
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { addTask, setHeader, delTask } from "../store/card/task/taskActions";
import { deleteCard } from "../store/card/cardActions";
import { useDispatch } from "react-redux";
import "./cardInfo.scss";
import { Task } from "./task/task";

export function CardInfo({ card }) {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const addNewTask = (e) => {
    e.preventDefault();

    dispatch(addTask(value, card.id));
  };
  const closeCard = () => {
    dispatch(deleteCard(card.id));
  };
  const deleteTask = (cardId, taskId) => {
    dispatch(delTask(cardId, taskId));
  };
  const setTitle = (e) => {
    e.preventDefault();
    dispatch(setHeader(inputValue, card.id));
  };

  return (
    <div className="cardItem">
      <button onClick={closeCard} className="close-btn">
        ×
      </button>
      {card.title && <h1 className="item-header">{card.title}</h1>}

      {!card.title ? (
        <form className="header-form" name="setHeader" onSubmit={setTitle}>
          <div className="task-header">
            <p> give me a name!</p>
            <input
              type="text"
              className="input-for-header"
              autoFocus
              value={inputValue}
              name="headerInput"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </form>
      ) : (
        <div>
          <hr></hr>
          <form onSubmit={addNewTask}>
            <input
              type="text"
              autoFocus
              className="input-for-task"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </div>
      )}

      {card.title &&
        card.tasks.map((task, index) => (
          <Task deleteTask={deleteTask} cardId={card.id} task={task} key={index} />
        ))}
    </div>
  );
}

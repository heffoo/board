import React, { useState } from "react";
import { addTask, setHeader, delTask, setCompleted } from "../../store/card/task/taskActions";
import { deleteCard } from '../../store/card/cardActions'
import { useDispatch } from "react-redux";
import './cardInfo.scss'
import { Task } from "../card/task/task";
import { CardHeader } from "../card/headerInput/headerInput";
import { TaskInput } from "../card/taskInput/taskInput";

export function CardInfo({ card }) {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  

  const dispatch = useDispatch();

  const addNewTask = (e) => {
    e.preventDefault();
    dispatch(addTask(value, card.id));
    setValue("");
  };
  // const setTaskChecked = () => {
  //   dispatch(setCompleted(card.id, task.id))
  // }
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
        <CardHeader setTitle={setTitle} inputValue={inputValue} setInputValue={setInputValue} />
      ) : (
        <div>
          <hr className="task-hr"></hr>
          <TaskInput addNewTask={addNewTask} setValue={setValue} value={value}/>
        </div>
      )}<div className="modals" id="modals"></div>
      <div className="block-scroll-wrapper">
        <div className="block-scroll">
          {card.title &&
            card.tasks.map((task, index) => <Task deleteTask={deleteTask} cardId={card.id} task={task} key={index} />)}
        </div>
      </div>
    </div>
  );
}

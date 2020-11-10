import React, { useState } from "react";
import { addTask, setHeader } from "../store/card/task/taskActions";
import { useDispatch } from "react-redux";
import "./cardItem.scss";

export function CardInfo({ card }) {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const addNewTask = () => {
    console.log(card.id);
    dispatch(addTask(value, card.id));
  };


console.log(inputValue)
  const setTitle = (e) => {
    e.preventDefault();
    dispatch(setHeader(inputValue, card.id));
    
  };

  return (
    <div className="cardItem">
      <form className="header-form" name="setHeader" onSubmit={setTitle}>
     {!card.title && <input type="text" id="inputa" value={inputValue} name="headerInput" onChange={(e) => setInputValue(e.target.value)} />} 
        
        <button type="submit">222</button>
      </form>
      {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> 
     <button onClick={addNewTask}>111</button> */}
      {card.tasks.map((task, index) => (
        <div key={index} className="taskInfo">
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}

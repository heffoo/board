import React, { useState } from "react";
import { addTask } from "../store/card/task/taskActions";
import { useDispatch } from "react-redux";
import "./cardItem.scss";

export function CardInfo({ card }) {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const addNewTask = () => {
    console.log(card.id);
    dispatch(addTask(value, card.id));
  };

  const onSubmitValue = (e) => {
    e.preventDefault();
    const form = document.forms.setHeader;
    setInputValue(form.elements.headerInput.value);
    form.elements.headerInput.value = "";
  };

  return (
    <div className="cardItem">
      <form name="setHeader" onSubmit={onSubmitValue}>
        <input type="text" id="12312" name="headerInput" />
        <p>{inputValue}</p>
        <button type="submit">222</button>
      </form>
      {/* <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> */}
      <button onClick={addNewTask}>111</button>
      {card.tasks.map((task, index) => (
        <div key={index} className="taskInfo">
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}
// const todos = useSelector((store) => store.app.cards);

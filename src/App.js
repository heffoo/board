import React, { useEffect } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { addCard, addState } from "./store/card/cardActions";
import { CardInfo } from "./shared/cardInfo";
// import {useSelector, useDispatch} from 'react-redux'

function App() {
  const cards = useSelector((store) => store.app.cards);
  const state = useSelector((store) => store.app);
  // const [value, setValue] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("data"));
    dispatch(addState(localState));
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  const addNewCard = (text) => {
    dispatch(addCard(text));
  };
  return (
    <div className="App">
      <p>my board looks like a shit just for now</p>
      <div className="card-place">
        {cards &&
          cards.map((card, index) => (
            <div key={index}>
              <CardInfo card={card} index={index} key={index} />
            </div>
          ))}{" "}
        <button className="button-new-task" onClick={() => addNewCard("")}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;

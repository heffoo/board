import React, { useEffect, useState } from "react";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { addCard, addState } from "./store/card/cardActions";
import { CardInfo } from "./shared/card/cardInfo";
import { AddCardButton } from "./shared/AddCardButton/AddCardButton";
import { Modal } from "./shared/modal";

function App() {
  const cards = useSelector((store) => store.app.cards);
  const state = useSelector((store) => store.app);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("data"));
    dispatch(addState(localState));
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  const addNewCard = (text = "") => {
    dispatch(addCard(text));
  };
  return (
    <div className="App">
      <button className="q-btn" title="ПОДСКАЗКА" onClick={() => setModalOpen(true)}>
        ?
      </button>
      <hr className="top-hr"></hr>
      <div className="card-place">
        {cards && cards.map((card, index) => <CardInfo card={card} index={index} key={index} />)}

        <AddCardButton addNewCard={addNewCard} />
      </div>

      <Modal isOpen={isModalOpen} setOpen={setModalOpen} />
    </div>
  );
}

export default App;

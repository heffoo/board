
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "./store/card/cardActions";
import { CardInfo } from "./shared/cardInfo";
// import {useSelector, useDispatch} from 'react-redux'

function App() {
  const cards = useSelector((store) => store.app.cards);

  // const [value, setValue] = useState('')
  const dispatch = useDispatch();

  const addNewCard = (text) => {
    dispatch(addCard(text));
  };
  return (
    <div className="App">
      <button onClick={() => addNewCard("")}>add a new card</button>
      <div className="card-place">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h1>{card.title}</h1>
            <CardInfo card={card} index={index} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

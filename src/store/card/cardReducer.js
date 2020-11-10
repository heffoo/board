import { v4 as uuidv4 } from "uuid";
const initialState = {
  cards: [
    { title: "", id: uuidv4(), tasks: [123, 1233, 1223, 123, 1233, 1223] },
    { title: "", id: uuidv4(), tasks: [123, 1233, 1223] },
    { title: "", id: uuidv4(), tasks: [] },
  ],
};
export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { title: action.text, id: uuidv4(), tasks: [] }],
      };
    case "ADD_TASK":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.id) {
            return { ...card, tasks: [...card.tasks, action.value] };
          }
          return card;
        }),
      };
      case "SET_HEADER": 
      return {
        ...state, 
        cards: state.cards.map((card) => {
          
          if (card.id === action.id) {console.log(action);
            return { ...card, title: action.title};
          }
          return card;
        }),   
      }
    default:
      return state;
  }
}

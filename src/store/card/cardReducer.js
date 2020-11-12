import { v4 as uuidv4 } from "uuid";
import * as constans from './consts'
const initialState = {
  cards: [],
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case constans.ADD_CARD:
      return {
        ...state,

        cards: [...state.cards, { title: action.text, id: uuidv4(), tasks: [] }],
      };
    case "ADD_TASK":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.id) {
            return { ...card, tasks: [...card.tasks, {id: uuidv4(), value: action.value}] };
          }
          return card;
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        cards: state.cards.map((card, index) => {
          if (card.id === action.cardId) {
            card.tasks =card.tasks.filter((task) => task.id !== action.taskId)
            return card
          } else return card;
        }),
        // [...state.cards.filter((item) => item.id !== action.id)],
      };
    case "SET_HEADER":
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.id) {
            console.log(action);
            return { ...card, title: action.title };
          }
          return card;
        }),
      };
    case "DELETE_CARD":
      return {
        ...state,
        cards: [...state.cards.filter((item) => item.id !== action.id)],
      };

    case "ADD_STATE":
      return action.state;
    default:
      return state;
  }
}

import { v4 as uuidv4 } from "uuid";
import * as consts from './consts'
const initialState = {
  cards: [],
};

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case consts.ADD_CARD:
      return {
        ...state,

        cards: [...state.cards, { title: action.text, id: uuidv4(), tasks: [] }],
      };
    case consts.ADD_TASK:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.id) {
            return { ...card, tasks: [ {id: uuidv4(), value: action.value}, ...card.tasks] };
          }
          return card;
        }),
      };
    case consts.DELETE_TASK:
      return {
        ...state,
        cards: state.cards.map((card, index) => {
          if (card.id === action.cardId) {
            card.tasks =card.tasks.filter((task) => task.id !== action.taskId)
            return card
          } else return card;
        }),
      };
    case consts.SET_HEADER:
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
    case consts.DELETE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((item) => item.id !== action.id)],
      };

    case consts.ADD_STATE:
      return action.state;
    default:
      return state;
  }
}

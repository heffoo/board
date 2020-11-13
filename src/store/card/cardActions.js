import * as consts  from './consts'
export const addCard = (task) => {
  return {
    type: consts.ADD_CARD,
    text: task,
  };
};
export const deleteCard = (id) => {
  return {
    type: consts.DELETE_CARD,
    id,
  };
};
export const addState = (state) => {
  return {
    type: consts.ADD_STATE,
    state,
  };
};

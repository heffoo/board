export const addCard = (task) => {
  return {
    type: "",
    text: task,
  };
};
export const deleteCard = (id) => {
  return {
    type: "DELETE_CARD",
    id,
  };
};
export const addState = (state) => {
  return {
    type: "ADD_STATE",
    state,
  };
};

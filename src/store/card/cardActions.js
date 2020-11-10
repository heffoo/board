export const addCard = (task) => {
  return {
    type: "ADD_CARD",
    text: task,
  };
};
export const deleteCard = () => {
  return {
    type: "DELETE_CARD",
  };
};

// export const addTask = (task) => {
//     return {
//       type: "ADD_TASK",
//       value: task,

//     };
//   };

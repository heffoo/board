export const addTask = (task, id) => {
  return {
    type: "ADD_TASK",
    value: task,
    id: id,
  };
};
export const delTask = (cardId, taskId) => {
  return {
    type: "DELETE_TASK",
    taskId,
    cardId,
  };
};
export const setHeader = (title, id) => {
  return {
    type: "SET_HEADER",
    title,
    id,
  };
};

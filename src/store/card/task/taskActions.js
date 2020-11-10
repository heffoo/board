export const addTask = (task, id) => {
  return {
    type: "ADD_TASK",
    value: task,
    id: id,
  };
};
export const delTask = (id) => {
  return {
    type: "DELETE_TASK",
    id: id,
  };
};

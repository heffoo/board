import * as consts from '../consts';
export const addTask = (task, id) => {
  return {
    type: consts.ADD_TASK,
    value: task,
    id: id,
  };
};
export const delTask = (cardId, taskId) => {
  return {
    type: consts.DELETE_TASK,
    taskId,
    cardId,
  };
};
export const setHeader = (title, id) => {
  return {
    type: consts.SET_HEADER,
    title,
    id,
  };
};
export const checkTask = (cardId, taskId, index) => {
  return {
    type: consts.CHECK_TASK,
    taskId,
    cardId,
    id:index,
  }
}

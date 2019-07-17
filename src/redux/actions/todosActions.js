import * as types from './actionTypes';
import * as todosApi from '../../api/todosApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

const loadTodosSuccess = todos => ({
  type: types.LOAD_TODOS_SUCCESS,
  todos
});

export function deleteTodoSuccess(id) {
  return { type: types.DELETE_TODO_SUCCESS, id };
}

export function createTodoSuccess(todo) {
  return { type: types.CREATE_TODO_SUCCESS, todo };
}

export function updateTodoSuccess(todo) {
  return { type: types.UPDATE_TODO_SUCCESS, todo };
}

export const saveTodo = todo => async dispatch => {
  dispatch(beginApiCall());
  try {
    const savedTodo = await todosApi.saveTodo(todo);
    todo.id
      ? dispatch(updateTodoSuccess(savedTodo))
      : dispatch(createTodoSuccess(savedTodo));
  } catch (error) {
    dispatch(apiCallError(error));
    throw error;
  }
};

export const loadTodos = () => async dispatch => {
  dispatch(beginApiCall());
  try {
    const todos = await todosApi.getTodos();
    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(apiCallError(error));
    throw error;
  }
};

export const deleteTodo = id => async dispatch => {
  dispatch(beginApiCall());
  try {
    await todosApi.deleteTodo(id);
    dispatch(deleteTodoSuccess(id));
  } catch (error) {
    dispatch(apiCallError(error));
    throw error;
  }
};

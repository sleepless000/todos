import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function usersReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos;
    case types.DELETE_TODO_SUCCESS:
      return state.filter(todos => todos.id !== action.id);
    case types.CREATE_TODO_SUCCESS:
      return [...state, { ...action.todo }];
    case types.UPDATE_TODO_SUCCESS:
      return state.map(todo =>
        todo.id === action.todo.id ? action.todo : todo
      );
    default:
      return state;
  }
}

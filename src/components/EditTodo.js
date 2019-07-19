import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GridLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { loadTodos, saveTodo } from '../redux/actions/todosActions';
import EditTodoForm from './EditTodoForm';

const Loader = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ManageTodo({
  todos,
  loadTodos,
  saveTodo,
  loading,
  history,
  ...props
}) {
  const [todo, setTodo] = useState({ ...props.todo });

  useEffect(() => {
    if (todos.length === 0) {
      loadTodos().catch(error => {
        toast.error('Loading todos failed' + error);
      });
    } else {
      setTodo({ ...props.todo });
    }
  }, [loadTodos, props.todo, todos.length]);

  const handleChange = event => {
    const { name, value } = event.target;
    setTodo(todo => ({
      ...todo,
      [name]: name === 'completed' ? JSON.parse(value) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    saveTodo(todo)
      .then(() => {
        toast.success('Todo saved.');
        history.push('/courses');
      })
      .catch(error => {
        toast.error('Edit todo not allowed by server', { autoClose: false });
        setTimeout(() => {
          history.push('/courses');
        }, 1000);
      });
  };

  return todos.length === 0 || loading ? (
    <Loader>
      <GridLoader color="black" size={25} margin="3px" />
    </Loader>
  ) : (
    <EditTodoForm onChange={handleChange} onSave={handleSave} todo={todo} />
  );
}

const getTodoById = (todos, id) => todos.find(todo => todo.id === id);

const mapStateToProps = (state, ownProps) => {
  return {
    todo: getTodoById(state.todos, +ownProps.match.params.id) || {
      title: '',
      completed: false
    },
    todos: state.todos,
    loading: state.apiCallsInProgress > 0
  };
};

export default connect(
  mapStateToProps,
  { loadTodos, saveTodo }
)(ManageTodo);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { loadTodos, saveTodo } from '../redux/actions/todosActions';
import TodoForm from './TodoForm';
import Spinner from './Spinner/Spinner';

function TodoPage({ todos, loadTodos, saveTodo, loading, history, ...props }) {
  const [todo, setTodo] = useState({ ...props.todo });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (todos.length === 0) {
      loadTodos().catch(error => {
        toast.error('Loading todos failed' + error);
      });
    } else {
      setTodo({ ...props.todo });
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setTodo(todo => ({
      ...todo,
      [name]: name === 'completed' ? JSON.parse(value) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    setSaving(true);
    saveTodo(todo)
      .then(() => {
        toast.success('Todo saved.');
        history.push('/courses');
      })
      .catch(error => {
        toast.error('Error: ' + error);
        setSaving(false);
      });
  };

  return todos.length === 0 || loading ? (
    <Spinner />
  ) : (
    <TodoForm
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
      todo={todo}
    />
  );
}

export function getTodoById(todos, id) {
  return (
    todos.find(todo => {
      return todo.id === +id;
    }) || null
  );
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const todo =
    id && state.todos.length > 0
      ? getTodoById(state.todos, id)
      : { title: '', completed: false };
  return {
    todo,
    todos: state.todos,
    loading: state.apiCallsInProgress > 0
  };
}

export default connect(
  mapStateToProps,
  { loadTodos, saveTodo }
)(TodoPage);

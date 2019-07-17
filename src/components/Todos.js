import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { loadTodos, deleteTodo } from '../redux/actions/todosActions';
import Todo from './Todo';
import styled from 'styled-components';
import Spinner from './Spinner/Spinner';

const Wrapper = styled.div`
  margin: 2rem auto;
  width: 85%;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const Button = styled.div`
  text-align: center;
  padding: 1rem;
  border: 2px solid black;
  cursor: pointer;
`;

function Todos({ todos, loadTodos, deleteTodo, history, loading }) {
  const handleAddTodo = () => history.push('/todo');
  useEffect(() => {
    if (todos.length === 0) {
      loadTodos().catch(error => toast.error('Loading todos failed' + error));
    }
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Wrapper>
      <Title>Todos</Title>
      <Button onClick={handleAddTodo}>Add Todo</Button>
      {todos
        .sort((a, b) => b.id - a.id)
        .map((todo, idx) => (
          <Todo {...todo} key={idx} deleteTodo={deleteTodo} />
        ))}
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
  loading: state.apiCallsInProgress > 0
});

export default connect(
  mapStateToProps,
  { loadTodos, deleteTodo }
)(Todos);

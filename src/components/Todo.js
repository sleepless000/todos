import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  font-size: 1.1rem;
`;
const StyledLink = styled(Link)`
  place-self: center end;
  text-decoration: none;
  color: blue;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
`;

const DeleteButton = styled.div`
  place-self: center end;
  text-decoration: none;
  color: red;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  cursor: pointer;
`;

export default function Todo({ id, title, completed, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(id);
    toast.error('Todo with ID ' + id + ' was deleted');
  };
  const path = 'todo/' + id;
  return (
    <Grid>
      <div>{title}</div>
      <div>{completed ? 'completed' : 'not completed'}</div>

      <StyledLink to={path}>edit</StyledLink>

      <DeleteButton onClick={handleDelete}>delete</DeleteButton>
    </Grid>
  );
}
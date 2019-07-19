import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  height: 60vh;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: repeat(4, 1fr);
`;

const Input = styled.textarea`
  text-align: left;
  padding: 1rem;
  border: 2px solid black;
  padding: 0.2rem;
  font-size: 1.5rem;
  @media (max-width: 590px) {
    height: 4em;
    width: 20em;
  }
`;

const Button = styled.div`
  text-align: center;
  padding: 1rem;
  border: 2px solid black;
  cursor: pointer;
`;

const Select = styled.select`
  text-align: center;
  padding: 1rem;
  border: 2px solid black;
  cursor: pointer;
  font-size: 1rem;
`;

export default function({ todo, onSave, onChange }) {
  return (
    <Form onSubmit={onSave}>
      <h2>{todo.id ? 'Edit' : 'Add'} Todo</h2>
      <Input
        rows="2"
        cols="50"
        value={todo.title}
        onChange={onChange}
        name="title"
      />
      <Select value={todo.completed} onChange={onChange} name="completed">
        <option value={true}>completed</option>
        <option value={false}>not completed</option>
      </Select>
      <Button type="submit" onClick={onSave}>
        Save
      </Button>
    </Form>
  );
}

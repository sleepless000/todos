import React from 'react';
import TextInput from './TextInput';
import styled from 'styled-components';

const Form = styled.form`
  height: 70vh;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: repeat(4, 1fr);
`;

const Button = styled.div`
  text-align: center;
  padding: 1rem;
  border: 2px solid black;
  cursor: pointer;
`;

const StyledSelect = styled.select`
  text-align: center;
  padding: 1rem;
  border: 2px solid black;
  cursor: pointer;
  font-size: 1rem;
`;

export default function TodoForm({ todo, onSave, onChange, saving = false }) {
  return (
    <Form onSubmit={onSave}>
      <h2>{todo.id ? 'Edit' : 'Add'} Todo</h2>

      <TextInput
        name="title"
        label="Title"
        value={todo.title}
        onChange={onChange}
      />
      <StyledSelect value={todo.completed} onChange={onChange} name="completed">
        <option value="true">completed</option>
        <option value="false">not completed</option>
      </StyledSelect>

      <div>
        <Button type="submit" disabled={saving} onClick={onSave}>
          {saving ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </Form>
  );
}

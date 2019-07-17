import React from 'react';
import styled from 'styled-components';

const Input = styled.textarea`
  text-align: left;
  padding: 1rem;
  border: 2px solid black;
  padding: 0.2rem;
  font-size: 1.5rem;
`;

const TextInput = ({ name, onChange, value }) => {
  return (
    <div>
      <label htmlFor={name} />
      <div>
        <Input
          rows="2"
          cols="50"
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default TextInput;

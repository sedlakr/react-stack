import React, {useState} from 'react';
import styled from 'styled-components';

export interface CheckboxProps {
  isChecked?: boolean;
}

const Input = styled.input`
  display: inline-block;
  margin-right: 20px;
`;
const Inline = styled.div`
  display: inline-block;

`;

export function Checkbox({isChecked = false}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);
  return (
    <div>
      <Input type={'checkbox'} checked={checked}
             onChange={() => setChecked(!checked)}/>
      <Inline onClick={() => setChecked(!checked)}>
        {checked ? 'checked' : 'not checked'}
      </Inline>
    </div>
  );
}

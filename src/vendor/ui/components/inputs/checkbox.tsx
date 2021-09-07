import React, {useState} from 'react';

export interface CheckboxProps {
  isChecked?: boolean;
}

export function Checkbox({isChecked = false}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);
  return (
    <>
      <input type={'checkbox'} checked={checked}
             onChange={() => setChecked(!checked)}/>
      {checked ? <div>checked</div> : <div>not checked</div>}
    </>
  );
}

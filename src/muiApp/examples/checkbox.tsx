import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import {CheckboxProps} from '@mui/material/Checkbox/Checkbox';

export function CheckboxEx() {

  const label: CheckboxProps = {};
  return <>
    Checkboxes:
    <div>
      <Checkbox {...label} defaultChecked/>
      <Checkbox {...label} />
      <Checkbox {...label} disabled/>
      <Checkbox {...label} disabled checked/>
    </div>
  </>;
}
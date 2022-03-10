import Button from '@mui/material/Button';
import React from 'react';

export function Buttons() {
  return <>
    Buttons:
    <br/>
    <Button variant={'outlined'}>hello</Button>
    <span> </span>
    <Button variant={'contained'} >world</Button>
    <span> </span>
    <Button variant={'contained'} size="small" >small</Button>
    <span> </span>
    <Button variant={'contained'} size="medium" color="warning">medium warning</Button>
    <span> </span>
    <Button variant={'contained'} size="large" color="error">large error</Button>
  </>;
}
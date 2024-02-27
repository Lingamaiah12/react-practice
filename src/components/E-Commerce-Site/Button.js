

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function buttons(){
    function handleBtn(){
        alert("submit");
    }
  return (
    <Stack spacing={2} direction="row">

      <Button variant="contained" onClick={handleBtn}>Contained</Button>
      
    </Stack>
  );
}
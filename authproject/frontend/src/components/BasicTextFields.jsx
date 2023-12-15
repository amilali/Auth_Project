import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';  


export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  required id="standard-basic" label="Email" variant="standard" placeholder="xx@abc.com" />
      <TextField
        required
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
      />
      <Button style={{
        borderRadius: '20px'

      }}   
      variant="contained">Submit</Button>
    </Box>
  );
}

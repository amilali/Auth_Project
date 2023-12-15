import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import BasicTextFields from '../src/components/BasicTextFields.jsx'
import '../src/App.css'


export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light'
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button style={{padding:'8px', backgroundColor: '#2E8CEA', margin: '5px', border: 'none', color: 'white', borderRadius: '5px'}}onClick={toggleTheme} >{darkTheme ? 'dark' : 'light'}</button>
      
     <BasicTextFields />
     
    </ThemeProvider>
  );
}

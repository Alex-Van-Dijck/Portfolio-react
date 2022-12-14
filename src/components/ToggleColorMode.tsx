import {ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import App from '../App';
import defaultTheme from '../Styling/Theme';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const ToggleColorMode=()=> {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(() => createTheme(defaultTheme(mode)), [mode]);
  
    return (
      <ColorModeContext.Provider value={colorMode}>

        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

  export default ToggleColorMode;
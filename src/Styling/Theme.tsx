import { createTheme } from '@mui/material/styles';
import { indigo,teal,grey, deepPurple} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import { light, dark } from '@mui/material/styles/createPalette';


export const darkTheme = createTheme({
  typography:{
    fontFamily:['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'].join(''),
  },
  palette: {
    primary: {
      main: indigo[500],
      light: '#6573c3',
      dark: '#2c387e'
    },
    secondary: {
      main: '#1de9b6',
      light:"#4aedc4",
      dark: '#14a37f'
    },
    background:{
        default:'#121212',
        paper: '#121212'
    },
    divider:'rgba(255, 255, 255, 0.12)',
    text:{
      primary:'#fff',
      secondary:'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    mode:'dark'
  },
});

export const lightTheme =createTheme({
  typography:{
      fontFamily:['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'].join(''),
  },
  palette: {
    primary: indigo,
    secondary: teal,
    background: {
      default: '#f5fffa'
    },
    divider: indigo[200],
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
    mode: 'light',
},
});


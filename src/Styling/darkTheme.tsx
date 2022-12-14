import { createTheme } from '@mui/material/styles';
import { indigo,teal } from '@mui/material/colors';


const defaultTheme = createTheme({
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
        
    }
  },
});

export default defaultTheme;
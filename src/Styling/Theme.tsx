import { createTheme } from '@mui/material/styles';
import { indigo,teal,grey, deepPurple} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import { light, dark } from '@mui/material/styles/createPalette';


const defaultThemeOld = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: indigo,
          divider: indigo[200],
          secondary: teal,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: '#121212',
          divider: '#121858',
          background: {
            default: '#121212',
            paper: '#121212',
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

const defaultTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: indigo,
          secondary:teal,
          divider: indigo[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepPurple,
          divider: teal[900],
          background: {
            default: '#121212',
            paper:  '#121212',
          },
          text: { 
          primary: '#fff',
          secondary: grey[500],
        },
      }),
},
});


     

export default defaultTheme;

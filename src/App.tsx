import React, { useEffect, useState } from 'react';
import Menu from './components/Menu'
import CardPage from './components/Pages/ComponentPage/CardPage';
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import ContactPage from './components/Pages/Contact/Contact';
import ShoppingList from './components/labos/ShoppingList/ShoppingList';
import TodoApp from './components/labos/Todo/TodoApp';
import Poke5App from './components/labos/Pokemon5/Poke5App';
import ColorSelect from './components/labos/ColorSelect/ColorSelect';
import TicTacToe from './components/labos/TicTacToe/TicTacToe';
import styles from './App.module.css';
import { IconButton,  ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './Styling/Theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@emotion/react';
import SlotMachine from './components/labos/Slots/SlotMachine';
import DadJoke from './components/labos/DadJoke/DadJoke';
import TimerApp from './components/labos/Timer/TimerApp';


const Root = () => {

  return (
      <div>
        <Menu />
        <Outlet/>
      </div>
  );
}

function App() {

  const [theme,setTheme] = useState(lightTheme);

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "Portfolio",
                element: <CardPage/>
            },
            {
                path:"Portfolio/Shoppinglist",
                element: <ShoppingList/>
            },
            {
              path:"Portfolio/Todo",
              element: <TodoApp/>
            },
            {
              path:"Portfolio/Slots",
              element: <SlotMachine slots={3}/>
            },
            {
              path:"Contact",
              element: <ContactPage/>
            },
            {path:"Portfolio/Pokemon",
            element: <Poke5App/>},
            {path:"Portfolio/TicTacToe",
            element:<TicTacToe/>},
            {path:"Portfolio/DadJoke",
            element:<DadJoke/>},
            {path:"Portfolio/ColorSelect",
            element:<ColorSelect/>},
            {path:"Portfolio/Timer",
            element:<TimerApp/>}
        ]
    }
]);

const toggleDark = ()=>{
  setTheme(theme === lightTheme? darkTheme : lightTheme)
}

  document.body.style.backgroundColor = theme.palette.background.default;

  return (
    <ThemeProvider theme={theme}>
      <div>
          <IconButton sx={{ ml: 1,position:'absolute',right:'1rem',top:'1rem' }} onClick={toggleDark} color='secondary'>
            {theme === darkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        <RouterProvider router={router} />
      </div>  
    </ThemeProvider>
      
  )
}

export default App;

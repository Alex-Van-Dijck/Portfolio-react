import React, { useState } from 'react';
import Menu from './components/Menu'
import CardPage from './components/Pages/ComponentPage/CardPage';
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import ContactPage from './components/Pages/Contact/Contact';
import ShoppingList from './components/labos/ShoppingList/ShoppingList';
import TodoApp from './components/labos/Todo/TodoApp';
import Poke5App from './components/labos/Pokemon5/Poke5App';
import TicTacToe from './components/labos/TicTacToe/TicTacToe';
import styles from './App.module.css';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './Styling/Theme';



const Root = () => {
  return (
      <div>
        <Menu/>
        <Outlet/>
      </div>
  );
}

function App() {

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
              path:"Contact",
              element: <ContactPage/>
            },
            {path:"Portfolio/Pokemon",
            element: <Poke5App/>},
            {path:"Portfolio/TicTacToe",
            element:<TicTacToe/>}
        ]
    }
]);

  return (
     <div className={styles.background}>
        <RouterProvider router={router} />
        <div className={styles.blob}/>
        <div className={styles.blob2}/> 
        <div className={styles.blob3}/>
      </div>   
  )
}

export default App;

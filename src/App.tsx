import './App.css';
import Menu from './components/Menu'
import CardPage from './components/Pages/ComponentPage/CardPage';
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import ContactPage from './components/Pages/Contact/Contact';
import ShoppingList from './components/labos/ShoppingList/ShoppingList';
import TodoApp from './components/labos/Todo/TodoApp';
import Poke5App from './components/labos/Pokemon5/Poke5App';

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
            element: <Poke5App/>}
        ]
    }
]);

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

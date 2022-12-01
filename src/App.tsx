import './App.css';
import Menu from './components/Menu'
import CardPage from './components/Pages/ComponentPage/CardPage';
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import ContactPage from './components/Pages/Contact/Contact';

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
              path:"contact",
              element: <ContactPage/>
            }
        ]
    }
]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

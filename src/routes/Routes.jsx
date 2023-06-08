import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error404Page from "../pages/Error404Page/Error404Page";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/Home/AddToy/AddToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch(`https://toy-marketplace-server-side-chi.vercel.app/allToyCars`)
      },
      {
        path: 'add-a-toy',
        element: <AddToy></AddToy>
      },
      {
        path: 'toy-details/:id',
        element: <ToyDetails></ToyDetails>,
        loader: ({params}) => fetch(`https://toy-marketplace-server-side-chi.vercel.app/allToy/${params.id}`)
      }
    ],
  },
  {
    path: "*",
    element: <Error404Page></Error404Page>,
  },
]);

export default router;

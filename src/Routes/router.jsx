import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddProduct from "../components/Products/AddProduct";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SingnIn/SignIn";
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/products"),
      },{

        path: "/add-product",
        element: <PrivateRoutes>
          <AddProduct/>
        </PrivateRoutes>,
      },{
        path:"signUp",
        element:<SignUp/>
      },{

        path: "/signIn",
        element: <SignIn/>
      }

    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddProduct from "../components/Products/AddProduct";
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
        element: <AddProduct/>,
      }

    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import Products from "../pages/product/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AboutUs from "../pages/AboutUs";
import Demo from "../pages/demo";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/product/ProductDetails";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/products",
        element: <Products />,
        children: [{ path: ":product-details", element: <ProductDetails /> }],
      },

      { path: "/about", element: <AboutUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/demo", element: <Demo /> },
      { path: "/contact", element: <Contact /> },
      // ...other routes
      { path: "*", element: <NotFound /> }, // Inside MainLayout
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

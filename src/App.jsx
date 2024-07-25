import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Testimonial from "./Components/Pages/Testimonial";
import Shop from "./Components/Pages/Shop";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import Login from "./Components/Blocks/Login";
import EditProfile from "./Components/Blocks/EditProfile";
import ProductDetails from "./Components/Pages/ProductDetails";
import AuthRouter from "./utils/authRouter";
import Signup from "./Components/Blocks/Signup";
import Profile from "./Components/Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "testimonial",
        element: <Testimonial />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        element: <AuthRouter />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "product/:id",
            element: <ProductDetails />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "editprofile",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/SignUp/SignUp";
import { Checkout } from "../Pages/Checkout/Checkout";
import { BookService } from "../Pages/BookService/BookService";
import { BookingsAll } from "../Pages/BookingsAll/BookingsAll";
import { PrivateRoute } from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/bookService/:id",
        element: <PrivateRoute><BookService></BookService></PrivateRoute> ,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/bookingsAll",
        element: <PrivateRoute><BookingsAll></BookingsAll></PrivateRoute>
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
    ],
  },
]);

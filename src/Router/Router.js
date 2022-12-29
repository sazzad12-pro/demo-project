import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/Authentication/Login";
import Register from "../Component/Authentication/Register";
import Home from "../Component/Home/Home";
import Main from "../LayOut/Main";
import AddTask from "../Task/AddTask/AddTask";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

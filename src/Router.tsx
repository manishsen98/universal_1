import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout, { UnAuthLayout } from "./Layout";
import NotFound from "./pages/notFoundPage/404NotFound";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <UnAuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/signup",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;

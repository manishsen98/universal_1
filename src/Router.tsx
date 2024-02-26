import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout, { UnAuthLayout } from "./Layout";
import NotFound from "./pages/notFoundPage/404NotFound";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import OtherPage from "./pages/otherPage/OtherPage";

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
      {
        path: "/services/:route",
        element: <OtherPage />,
      },
      {
        path: "/services-feng-shui",
        element: <h1>Feng Shui Page</h1>,
      },
    ],
  },
]);

export default router;

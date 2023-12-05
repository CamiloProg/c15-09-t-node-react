import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { MainLayout } from "./components/layouts/MainLayout";
import { AppIndex } from "./pages/AppIndex";
import { Stylespage } from "./pages/Stylespage";
import { CreateBeer } from "./pages/CreateBeer";
import { StyleDetails } from "./pages/StyleDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <AppIndex />,
      },
      {
        path: "styles",
        element: <Stylespage />,
      },
      {
        path: "styledetails",
        element: <StyleDetails />,
      },
      {
        path: "create",
        element: <CreateBeer />,
      },
    ],
  },
]);

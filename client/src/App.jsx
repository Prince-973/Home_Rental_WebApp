import Homepage from "./routes/Homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import { Layout, RequireAuth } from "./routes/layout/Layout";
import SinglePage from "./routes/SingalPage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Calander from "./components/calander/Calander";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

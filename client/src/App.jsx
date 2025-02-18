import Homepage from "./routes/Homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/SingalPage/SinglePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Calander from "./components/calander/Calander";
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
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/test",
          element: <Calander />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

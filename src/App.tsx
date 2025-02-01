import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./pages/Login/Login";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

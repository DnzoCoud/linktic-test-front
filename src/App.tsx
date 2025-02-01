import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./pages/Login/Login";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import CompanyPage from "./pages/Companies/CompanyPage";

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
        {
          path: "/companies",
          element: <CompanyPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import DashboardPage from "./pages/Dashboard";
import ProductsPage from "./pages/products/Products";

const router = createBrowserRouter([
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "sales",
        element: <DashboardPage />,
      },
      {
        path: "deliveries",
        element: <DashboardPage />,
      },
      {
        path: "customers",
        element: <DashboardPage />,
      },
    ],
  },

  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  //   second route
]);

export default router;

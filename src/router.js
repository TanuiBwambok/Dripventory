import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import DashboardPage from "./pages/Dashboard";
import AddProductspage from "./pages/products/Add_products";
import ProductsPage from "./pages/products/Products";
import SalesFormPage from "./pages/sale/salesform";
import SalesTablePage from "./pages/sale/salestable";

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
        path: "addproducts",
        element: <AddProductspage />,
      },

      {
        path: "sales",
        element: <SalesTablePage />,
      },
      {
        path: "salesform",
        element: <SalesFormPage />,
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

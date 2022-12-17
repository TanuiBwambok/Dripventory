import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import AuthLayout from "./pages/auth/AuthLayout";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import CustomersPage from "./pages/customers/Customers";
import DashboardPage from "./pages/Dashboard";
import DeliveriesPage from "./pages/deliveries/Deliveries";
import AddProductPage from "./pages/products/AddProduct";
import ProductsPage from "./pages/products/Products";
import TablePage from "./pages/products/ProductTable";
import AddSalePage from "./pages/sale/AddSale";
import SalesPage from "./pages/sale/Sales";

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
        path: "products/add",
        element: <AddProductPage />,
      },

      {
        path: "sales",
        element: <SalesPage />,
      },
      {
        path: "sales/add",
        element: <AddSalePage />,
      },
      {
        path: "deliveries",
        element: <DeliveriesPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },

      {
        path: "table",
        element: <TablePage />,
      },
    ],
  },

  {
    path: "",
    element: AuthLayout,
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

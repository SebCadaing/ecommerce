import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import SellerForm from "../../forms/SellerForm";
import ProductDetail from "../../features/productDetail/ProductDetail";
import HomePage from "../../Home/HomePage";
import CartifyDashboard from "../../features/dashboard/CartifyDashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/CartifyDashboard", element: <CartifyDashboard /> },
      { path: "/CartifySellerForm", element: <SellerForm /> },
      { path: `/CartifyProductDetails/:id`, element: <ProductDetail /> },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductsDetails from "../pages/ProductsDetails";
import MyCartPage from "../pages/MyCartPage";
import BrandProductPage from "../pages/BrandProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../utilitis/ProtectedRoute";
import {
  brandLoader,
  oneProductLoader,
  productOfBrands,

} from "../utilitis/LoaderHandle";
import BrandProducts from "../components/Cards/BrandProducts";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children:[
          {
             
        path: "/products/category/:brandName",
        element: <BrandProducts />,
        loader: brandLoader, 
      

          }
        ]
      },
      {
        path: "/product/add",
        element: (
          <ProtectedRoute>
            <AddProductPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product/update/:id",
        element: (
          <ProtectedRoute>
            <AddProductPage update={true} />
          </ProtectedRoute>
        ),
        loader: oneProductLoader,
      },
      {
        path: "/products/:id",
        element: (
          <ProtectedRoute>
            <ProductsDetails />
          </ProtectedRoute>
        ),
        loader: oneProductLoader,
      },
      {
        path: "/brand/:brandName",
        element: <BrandProductPage />,
        loader: productOfBrands,
      },
      {
        path: "/myAddedProduct",

        element: <ProtectedRoute>
          <MyCartPage />,
        </ProtectedRoute>

        // loader: productsOfCart,
      },
       
    
    ],
  },
  {
    path: "/signIn",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <RegisterPage />,
  },
]);

export default Route;

import WrapperRouting from "./layout/WrapperRouting/WrapperRouting";
import {
  Home,
  Contact,
  Products,
  Login,
  Register,
  Cart,
  CheckoutDetails,
  ProductDetails,
} from "./pages/index";

export default [
  {
    path: "/",
    element: <WrapperRouting />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/products",
        element: <WrapperRouting />,
        children: [
          { index: true, element: <Products /> },
          {
            path: "/products/:id",
            element: <ProductDetails />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/checkout-details",
        element: <CheckoutDetails />,
      },
    ],
  },
];

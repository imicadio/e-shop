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
import { ROUTE } from "./shared/routing";

export default [
  {
    path: ROUTE.HOME,
    element: <WrapperRouting />,
    children: [
      { index: true, element: <Home /> },
      {
        path: ROUTE.PRODUCTS,
        element: <WrapperRouting />,
        children: [
          { index: true, element: <Products /> },
          {
            path: ROUTE.PRODUCTS_DETAIL + "/:id",
            element: <ProductDetails />,
          },
        ],
      },
      { path: ROUTE.CONTACT, element: <Contact /> },
      { path: ROUTE.LOGIN, element: <Login /> },
      { path: ROUTE.REGISTER, element: <Register /> },
      { path: ROUTE.CART, element: <Cart /> },
      {
        path: ROUTE.CHECKOUT,
        element: <CheckoutDetails />,
      },
    ],
  },
];

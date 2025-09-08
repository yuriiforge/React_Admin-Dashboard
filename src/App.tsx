import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Users from './pages/Users/Users';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import './styles/global.scss';
import UserDetails from './pages/UserDetails/UserDetails';
import ProductDetails from './pages/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'users/:id',
        element: <UserDetails />,
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

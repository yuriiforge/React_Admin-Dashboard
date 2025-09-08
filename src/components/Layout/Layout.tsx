import { Outlet } from 'react-router-dom';

import './layout.scss';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import Navbar from './Navbar/Navbar';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../queryClient';

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

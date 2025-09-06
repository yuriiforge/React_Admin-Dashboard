import { Outlet } from 'react-router-dom';

import './layout.scss';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import Navbar from './Navbar/Navbar';

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contactContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

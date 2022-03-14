import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import classes from './Layout.module.scss';
const Layout = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className="container">
        <div className="page">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

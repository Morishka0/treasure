import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import classes from './Layout.module.scss';

const Layout: FC = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.page}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import classes from './Layout.module.scss';

type PropsType = {
  hasBackground: boolean;
};
const Layout: FC<PropsType> = ({ hasBackground }) => {
  const pageClasses = [classes.page];
  if (hasBackground) {
    pageClasses.push(classes.page_hasBackground);
  }

  return (
    <div className={classes.layout}>
      <Header />
      <div className={pageClasses.join(' ')}>
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

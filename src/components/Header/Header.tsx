import classes from './Header.module.scss';
import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__inner}>
          <div className={classes.header__logo}>
            <Logo />
          </div>
          <div className={classes.header__nav}>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

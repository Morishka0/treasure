import classes from './Logo.module.scss';
import React from 'react';
import logo from './images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link to="/" className={classes.logo__link}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;

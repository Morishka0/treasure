import classes from './Logo.module.scss';
import React from 'react';
import LogoImage from './images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Link to="/" className={classes.logo__link}>
        <LogoImage />
      </Link>
    </div>
  );
};

export default Logo;

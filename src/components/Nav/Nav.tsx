import classes from './Nav.module.scss';
import React from 'react';
import Link from '../Link/Link';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__inner}>
        <div className={classes.navItem}>
          <Link to="catalog">Каталог</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="delivery">Доставка</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="contacts">Контакты</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import classes from './Nav.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__inner}>
        <div className={classes.navItem}>
          <Link to="catalog" className={classes.navLink}>
            Каталог
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="delivery" className={classes.navLink}>
            Доставка
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="contacts" className={classes.navLink}>
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

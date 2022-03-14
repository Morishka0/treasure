import classes from './Nav.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__inner}>
        <div className={classes.navItem}>
          <Link to="catalog" className={classes.navLink}>
            <Button>Каталог</Button>
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="delivery" className={classes.navLink}>
            <Button>Доставка</Button>
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="contacts" className={classes.navLink}>
            <Button>Контакты</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

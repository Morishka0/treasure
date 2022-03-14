import classes from './Nav.module.scss';
import React from 'react';
import Link from '../Link/Link';
import CartImage from './images/cart.svg';
import SearchImage from './images/search.svg';
import ProfileImage from './images/profile.svg';

const Nav = () => {
  const onSearchClick = (event: React.SyntheticEvent) => {
    console.log(event);
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__inner}>
        <div className={classes.navItem}>
          <Link to="catalog" filled={true}>
            Каталог
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="delivery" filled={true}>
            Доставка
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="contacts" filled={true}>
            Контакты
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="cart">
            <CartImage />
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="search" onClick={onSearchClick}>
            <SearchImage />
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="profile">
            <ProfileImage />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

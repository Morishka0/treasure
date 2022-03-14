import classes from './Link.module.scss';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
  to: string;
  children: string;
};

const Link: FC<PropsType> = ({ to, children }) => {
  const isActiveClass = ({ isActive }: { isActive: boolean }) => {
    let classNames = `${classes.link}`;
    if (isActive) {
      classNames += ` ${classes.active}`;
    }

    return classNames;
  };
  return (
    <NavLink to={to} className={isActiveClass}>
      {children}
    </NavLink>
  );
};

export default Link;

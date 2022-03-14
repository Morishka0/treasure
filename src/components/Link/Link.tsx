import classes from './Link.module.scss';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

type PropsType = {
  to: string;
  children: string | React.ReactNode;
  filled?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
};

const Link: FC<PropsType> = ({ to, children, filled, onClick }) => {
  const setClasses = ({ isActive }: { isActive: boolean }) => {
    const classNames = [classes.link];
    if (isActive) {
      classNames.push(classes.active);
    }
    if (filled) {
      classNames.push(classes.link_filled);
    }
    return classNames.join(' ');
  };
  return (
    <NavLink to={to} onClick={onClick} className={setClasses}>
      {children}
    </NavLink>
  );
};

export default Link;

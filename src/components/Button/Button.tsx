import classes from './Button.module.scss';
import React, { FC } from 'react';

type PropsType = {
  children: string;
};

const Button: FC<PropsType> = ({ children }) => {
  return <div className={classes.button}>{children}</div>;
};

export default Button;

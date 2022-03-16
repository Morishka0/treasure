import React, { FC } from 'react';
import classes from './Description.module.scss';

type PropsType = {
  children: string;
};

const Description: FC<PropsType> = ({ children }) => {
  return <div className={classes.description}>{children}</div>;
};

export default Description;

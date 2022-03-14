import React, { FC } from 'react';
import classes from './Subtitle.module.scss';
type PropsType = {
  children: string;
};

const Subtitle: FC<PropsType> = ({ children }) => {
  return <div className={classes.subtitle}>{children}</div>;
};

export default Subtitle;

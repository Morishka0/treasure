import React, { FC } from 'react';
import { Colors, ColorsType } from '../../types/styles';
import classes from './Title.module.scss';

type PropsType = {
  children: string;
};

const Title: FC<PropsType> = ({ children }) => {
  return <h2 className={classes.title}>{children}</h2>;
};
export default Title;

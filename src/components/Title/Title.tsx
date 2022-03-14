import React, { FC } from 'react';
import { Colors, ColorsType } from '../../types/styles';
import classes from './Title.module.scss';

type PropsType = {
  children: string;
  color: ColorsType;
};

const Title: FC<PropsType> = ({ children, color }) => {
  const classNames = [classes.title];
  
  if (color === Colors.light) {
    classNames.push(classes.title_light);
  } else {
    classNames.push(classes.title_dark);
  }

  return <h2 className={classNames.join(' ')}>{children}</h2>;
};
export default Title;

import React, { FC } from 'react';
import { ColorsType } from '../../types/styles';
import classes from './Image.module.scss';

type PropsType = {
  image: string;
  color: ColorsType;
};
const Image: FC<PropsType> = ({ image, color }) => {
  return (
    <div className={classes.image}>
      <div className={classes.image__container}>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Image;

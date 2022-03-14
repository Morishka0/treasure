import React, { FC } from 'react';
import { ColorsType } from '../../types/styles';
import IntroDescription from '../IntroDescription/IntroDescription';
import IntroImage from '../IntroImage/IntroImage';
import classes from './IntroItem.module.scss';
type PropsType = {
  title: string;
  subtitle: string;
  image: string;
  color: ColorsType;
};
const IntroItem: FC<PropsType> = ({ title, subtitle, image, color }) => {


  return (
    <div className={classes.introItem}>
      <div className={classes.introItem__image}>
        <IntroImage image={image} color={color} />
      </div>
      <div className={classes.introItem__description}>
        <IntroDescription title={title} subtitle={subtitle} color={color} />
      </div>
    </div>
  );
};

export default IntroItem;

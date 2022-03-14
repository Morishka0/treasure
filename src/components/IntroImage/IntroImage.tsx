import React, { FC } from 'react';
import { ColorsType } from '../../types/styles';
import classes from './IntroImage.module.scss';
import SideDecoration from './images/side-decoration.svg';
import BottomDecoration from './images/bottom-decoration.svg';

type PropsType = {
  image: string;
  color: ColorsType;
};
const IntroImage: FC<PropsType> = ({ image, color }) => {
  return (
    <div className={classes.introImage}>
      <div className={classes.introImage__container}>
        <img src={image} alt="intro-image" />
      </div>
      <div className={classes.introImage__sideDecoration}>
        <SideDecoration />
      </div>

      <div className={classes.introImage__bottomDecoration}>
        <BottomDecoration />
      </div>
    </div>
  );
};

export default IntroImage;

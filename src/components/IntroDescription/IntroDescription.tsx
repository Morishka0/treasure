import React, { FC } from 'react';
import { Colors, ColorsType } from '../../types/styles';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import classes from './IntroDescription.module.scss';
type PropsType = {
  title: string;
  subtitle: string;
  color: ColorsType;
};
const IntroDescription: FC<PropsType> = ({ title, color, subtitle }) => {
  const classNames = [classes.introDescription];
  if (color === Colors.light) {
    classNames.push(classes.introDescription_light);
  } else {
    classNames.push(classes.introDescription_dark);
  }
  return (
    <div className={classNames.join(' ')}>
      <div className={classes.introDescription__title}>
        <Title color={color}>{title}</Title>
      </div>
      <div className={classes.introDescription__subtitle}>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </div>
  );
};

export default IntroDescription;

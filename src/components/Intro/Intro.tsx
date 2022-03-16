import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Description from '../Description/Description';
import Title from '../Title/Title';
import classes from './Intro.module.scss';
import RightArrow from '../RightArrow/RightArrow';
type PropsType = {
  title: string;
  slogan: string;
  image: string;
  stance: number;
};
const Intro: FC<PropsType> = ({ slogan, image, title, stance }) => {
  const classNames = [classes.intro];
  if (stance === 0) {
    classNames.push(classes.intro_first);
  } else {
    classNames.push(classes.intro_second);
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="container">
        <div className={classes.intro__inner}>
          <div className={classes.intro__info}>
            <div className={classes.intro__slogan}>{slogan}</div>
            <div className={classes.intro__title}>
              <Title>{title}</Title>
            </div>
            <div className={classes.intro__description}>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Description>
            </div>
            <div className={classes.intro__arrow}>
              <Link to="/catalog">
                <RightArrow />
              </Link>
            </div>
          </div>
          <div className={classes.intro__image}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

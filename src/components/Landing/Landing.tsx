import classes from './Landing.module.scss';
import React from 'react';
import IntroItem from '../IntroItem/IntroItem';
import IntroImage1 from './images/intro-image1.png';
import { Colors } from '../../types/styles';

const Landing = () => {
  return (
    <div className={classes.landing}>
      <div className="container">
        <div className={classes.landing__intro}>
          <div className={classes.landing__introItem}>
            <IntroItem
              title="treasure"
              subtitle="Когда-нибудь будем работать"
              color={Colors.light}
              image={IntroImage1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

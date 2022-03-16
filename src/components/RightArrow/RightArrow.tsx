import classes from './RightArrow.module.scss';
import React, { FC } from 'react';

const RightArrow: FC = () => {
  return (
    <div className={classes.rightArrow}>
      <div
        className={`${classes.rightArrow__element} ${classes.rightArrow__element_first}`}
      ></div>
      <div
        className={`${classes.rightArrow__element} ${classes.rightArrow__element_second}`}
      ></div>
      <div
        className={`${classes.rightArrow__element} ${classes.rightArrow__element_third}`}
      ></div>
    </div>
  );
};

export default RightArrow;

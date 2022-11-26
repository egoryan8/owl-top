import React from 'react';
import {ButtonIconProps, icons} from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';
import cn from 'classnames';

const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.white]: appearance == 'white',
      })}
      {...props}>
      <IconComp/>
    </button>
  );
};

export default ButtonIcon;

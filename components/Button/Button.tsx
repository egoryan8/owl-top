import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
const Button = ({ appearance, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}>
      {children}
    </button>
  );
};

export default Button;

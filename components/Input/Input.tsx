import React from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return (
    <input className={cn(styles.input, className)} {...props}/>
  );
};

export default Input;

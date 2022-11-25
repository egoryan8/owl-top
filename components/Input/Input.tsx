import React, {ForwardedRef, forwardRef} from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';
import cn from 'classnames';

const Input = forwardRef(({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <input className={cn(className, styles.input)} ref={ref} {...props}/>
  );
});

export default Input;

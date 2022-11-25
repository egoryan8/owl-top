import React, {ForwardedRef, forwardRef} from 'react';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';

const Textarea = forwardRef(({ className, ...props }: TextareaProps, ref:ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <textarea className={cn(styles.textarea, className)} ref={ref} {...props}/>
  );
});

export default Textarea;

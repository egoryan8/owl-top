import React, {ForwardedRef, forwardRef} from 'react';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';

const Textarea = forwardRef(({ className, error, ...props }: TextareaProps, ref:ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <textarea className={cn(styles.textarea, {
        [styles.error]: error,
      })} ref={ref} {...props}/>
      {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default Textarea;

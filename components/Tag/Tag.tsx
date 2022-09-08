import React from 'react';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

const Tag = ({ size, color, href, children, className, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.gray]: color === 'gray',
        [styles.primary]: color === 'primary',
      })}
      {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;

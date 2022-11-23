import React from 'react';
import styles from './Card.module.css';
import {CardProps} from './Card.props';
import cn from 'classnames';

const Card = ({color = 'white', children, className, ...props}: CardProps): JSX.Element => {
  return (
    <div className={cn(styles.card, className, {
      [styles.blue]: color == 'blue'
    })}
         {...props}
    >
         {children}
    </div>
  );
};

export default Card;

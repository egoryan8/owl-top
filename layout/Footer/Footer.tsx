import React from 'react';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import { format } from 'date-fns';
import cn from 'classnames';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <p>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;

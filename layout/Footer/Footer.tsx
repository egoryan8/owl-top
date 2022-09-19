import React from 'react';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Footer;

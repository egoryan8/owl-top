import React from 'react';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import Menu from '../Menu/Menu';
import Search from "../../components/Search/Search";
import Link from "next/link";
import LogoIcon from '../../assets/img/logo.svg';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href='/'>
        <LogoIcon/>
      </Link>
      <Search/>
      <Menu />
    </div>
  );
};

export default Sidebar;

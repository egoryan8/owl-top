import React from 'react';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import Menu from '../Menu/Menu';

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;

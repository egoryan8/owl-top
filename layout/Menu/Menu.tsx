import React, { useContext } from 'react';
import styles from './Sidebar.module.css';
import { AppContext } from '../../context/app.context';

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  return (
    <ul>
      {menu.map((item) => (
        <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
      ))}
    </ul>
  );
};

export default Menu;

import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../../assets/img/logo.svg';
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import {motion, useReducedMotion} from 'framer-motion';
import Sidebar from "../Sidebar/Sidebar";
import {useRouter} from "next/router";

const Header = ({className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpened(false);
  },[router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: shouldReduceMotion ? {} : {
        stiffness: 20,
      }
    },
    closed: {
      opacity: 0,
      x: '100%',
    }
  };

  return <header className={cn(styles.header, className)} {...props}>
    <Logo/>
    <ButtonIcon appearance={"white"} icon={"menu"} onClick={() => setIsOpened(true)}/>
    <motion.div
      className={styles.mobileMenu}
      variants={variants}
      initial={'closed'}
      animate={isOpened ? 'opened' : 'closed'}
    >
      <Sidebar/>
      <ButtonIcon className={styles.menuClose} appearance={"white"} icon={"close"} onClick={() => setIsOpened(false)}/>
    </motion.div>
  </header>;
};

export default Header;

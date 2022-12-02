import React, {useEffect} from 'react';
import styles from './UpButton.module.css';
import {useScrollY} from "../../hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const UpButton: React.FC = (): JSX.Element => {
  const controls = useAnimation();

  const y = useScrollY();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    controls.start({opacity: y / (document.body.scrollHeight / 5)})
  }, [y, controls])

  return (
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{opacity: 0}}
    >
      <ButtonIcon appearance={"primary"} icon={"up"} aria-label='наверх' onClick={scrollToTop}/>
    </motion.div>
  );
};

export default UpButton;
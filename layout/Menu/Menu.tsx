import React, {useContext, KeyboardEvent, useState} from 'react';
import cn from 'classnames';

import styles from './Menu.module.css';
import {AppContext} from '../../context/app.context';
import {FirstLevelMenuItem, PageItem} from '../../interfaces/menu.interface';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {firstLevelMenu} from '../../helpers/helpers';
import {motion, useReducedMotion} from 'framer-motion';

const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: .1,
      }
    },
    hidden: {
      marginBottom: 0,
    }
  }

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    }
  }

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
    setMenu(
      menu.map((m) => {
        if (m._id.secondCategory === secondCategory) {
          setAnnounce(m.isOpened ? 'closed' : 'opened');
          m.isOpened = !m.isOpened;
        }
        return m;
      }),
    );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    key.preventDefault();
    if (key.code == 'Space' || key.code == 'Enter') {
      openSecondLevel(secondCategory);
    }
  };

  const renderFirstLevel = () => {
    return (
      <ul className={styles.menu}>
        {firstLevelMenu.map((m) => (
          <li key={m.route} aria-expanded={m.id == firstCategory}>
            <Link href={`/${m.route}`}>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id == firstCategory,
                  })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>

            {m.id == firstCategory && renderSecondLevel(m)}
          </li>
        ))}
      </ul>
    );
  };

  const renderSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={cn(styles.secondLevelBlock)}>
                {renderThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return pages.map((p) => (
      <motion.li key={p._id} variants={variantsChildren}>
        <Link href={`/${route}/${p.alias}`}>
          <a
            tabIndex={isOpened ? 0 : -1}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
            })}
            aria-current={`/${route}/${p.alias}` == router.asPath ? 'page' : false}
          >
            {p.category}
          </a>
        </Link>
      </motion.li>
    ));
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && <span role="log" className="visuallyHidden">{announce === "opened" ? "развёрнутно" : "свёрнуто"}</span>}
      {renderFirstLevel()}
    </nav>
  )
};

export default Menu;

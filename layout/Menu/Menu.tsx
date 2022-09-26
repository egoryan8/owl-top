import React, { useContext } from 'react';
import cn from 'classnames';

import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface copy';
import Link from 'next/link';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#787D85"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12.892L5.67188 10.351V12.1868C5.67188 14.1911 8.39236 15.7024 12 15.7024C15.6076 15.7024 18.3281 14.1911 18.3281 12.1868V10.351L12 12.892Z" />
        <path d="M24 16.4055C24 15.4901 23.4104 14.7169 22.5938 14.4257V7.14159L24 6.56179L12 1.74707L0 6.56179L12 11.3766L21.1875 7.70624V14.4257C20.3708 14.7169 19.7812 15.4901 19.7812 16.4055C19.7812 17.2437 20.2762 17.9631 20.986 18.3031L19.8177 21.8081L21.1511 22.253L21.8906 20.0345L22.6301 22.253L23.9636 21.8081L22.7953 18.3031C23.505 17.9632 24 17.2437 24 16.4055Z" />
      </svg>
    ),
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#787D85"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6537 8.76156C19.7086 8.47062 19.7363 8.17386 19.7363 7.875C19.7363 5.18678 17.4891 3 14.7266 3C12.9631 3 11.3286 3.91408 10.4306 5.36661C9.21834 4.9842 7.97459 5.14818 6.94992 5.8353C5.92526 6.52188 5.3137 7.60893 5.26423 8.79753C3.9172 9.42012 3 10.7457 3 12.2083C3 12.4622 3.0632 12.7098 3.11155 12.9499L3.11211 12.9505C3.47199 14.7178 5.07939 16 6.93359 16H18.0664C20.2147 16 22 14.2988 22 12.2083C22 10.7299 21.0703 9.39896 19.6537 8.76156Z" />
      </svg>
    ),
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: (
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="#787D85"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M5.05938 3.74976C5.05884 3.74976 5.05824 3.74976 5.0577 3.74976C4.86854 3.74976 4.69063 3.81888 4.55628 3.9445C4.42046 4.07151 4.34564 4.24063 4.34564 4.42066V14.4808C4.34564 14.8497 4.66706 15.1506 5.06221 15.1515C6.72807 15.1553 9.51906 15.4807 11.4445 17.3695V6.84131C11.4445 6.71626 11.4104 6.59878 11.3461 6.50156C9.76579 4.11589 6.72902 3.75342 5.05938 3.74976Z" />
        <path d="M19.6544 14.4808V4.4206C19.6544 4.24057 19.5796 4.07145 19.4438 3.94444C19.3094 3.81882 19.1314 3.74969 18.9424 3.74969C18.9418 3.74969 18.9412 3.74969 18.9407 3.74969C17.2711 3.75342 14.2343 4.11589 12.654 6.50156C12.5897 6.59878 12.5557 6.71626 12.5557 6.84131V17.3695C14.4811 15.4807 17.272 15.1552 18.9379 15.1515C19.333 15.1505 19.6544 14.8496 19.6544 14.4808Z" />
        <path d="M21.2845 6.06976H20.7655V14.4808C20.7655 15.4227 19.9469 16.1908 18.9405 16.1931C17.5275 16.1962 15.1977 16.4553 13.5477 17.9192C16.4014 17.2642 19.4098 17.69 21.1243 18.0563C21.3383 18.102 21.5595 18.0547 21.7311 17.9266C21.902 17.7988 22 17.6077 22 17.4026V6.74054C22.0001 6.37069 21.679 6.06976 21.2845 6.06976Z" />
        <path d="M3.23448 14.4808V6.06976H2.71556C2.32108 6.06976 2 6.37069 2 6.74054V17.4024C2 17.6076 2.09805 17.7986 2.26896 17.9264C2.44034 18.0545 2.66135 18.1019 2.87576 18.0561C4.59024 17.6898 7.59867 17.264 10.4523 17.919C8.80231 16.4551 6.47247 16.1962 5.05947 16.193C4.05321 16.1908 3.23448 15.4227 3.23448 14.4808Z" />
      </svg>
    ),
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: (
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="#787D85"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M15.09 4.16813L6.92174 8.08845L3.67499 6.59091L11.6992 2.87659C11.8792 2.79081 12.0952 2.79081 12.2842 2.87659L15.09 4.16813Z" />
        <path d="M20.316 6.59094L12.0045 10.4508L8.89202 9.01302L8.44202 8.79858L16.6193 4.87897L17.0693 5.0927L20.316 6.59094Z" />
        <path d="M11.3385 11.563L11.3295 19.6856L3.369 15.7913C3.144 15.6802 3 15.4573 3 15.2176V7.70319L6.3735 9.26119V12.0003C6.3735 12.3512 6.6795 12.6423 7.0485 12.6423C7.4175 12.6423 7.7235 12.3512 7.7235 12.0003V9.89465L8.1735 10.1L11.3385 11.563Z" />
        <path d="M20.991 7.71161L12.6885 11.5546L12.6795 19.6771L21 15.6043L20.991 7.71161Z" />
      </svg>
    ),
    id: TopLevelCategory.Products,
  },
];

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const renderFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
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
          </div>
        ))}
      </>
    );
  };

  const renderSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}>
              {renderThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link href={`/${route}/${p.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}>
          {p.category}
        </a>
      </Link>
    ));
  };

  return <div className={styles.menu}>{renderFirstLevel()}</div>;
};

export default Menu;

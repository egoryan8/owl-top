import React from 'react';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import cn from 'classnames';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { AppContextProvider, IAppContext } from '../context/app.context';
import UpButton from "../components/UpButton/UpButton";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.body} role="main">
        {children}
      </main>
      <Footer className={styles.footer} />
      <UpButton/>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: React.FC<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};

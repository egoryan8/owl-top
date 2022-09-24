import React from 'react';
import { createContext, ReactNode } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface copy';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  const [stateMenu, setStateMenu] = React.useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setStateMenu(newMenu);
  };
  return (
    <AppContext.Provider value={{ menu: stateMenu, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};

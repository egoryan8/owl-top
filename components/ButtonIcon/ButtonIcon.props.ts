import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import up from './up.svg';
import menu from './menu.svg';
import close from './close.svg';

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;


export interface ButtonIconProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'white';
  icon: IconName;
}

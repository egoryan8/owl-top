import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import up from '../../assets/img/upBtn.svg';
import menu from '../../assets/img/menuBtn.svg';
import close from '../../assets/img/closeBtn.svg';

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

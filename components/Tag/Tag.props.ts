import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'red' | 'green' | 'primary' | 'ghost' | 'gray';
  href?: string;
}

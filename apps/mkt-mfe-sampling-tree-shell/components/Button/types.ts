import React, { CSSProperties, ReactNode } from 'react';

export interface IButtonProps {
  variant?: 'solid' | 'outline';
  color?: CSSProperties['color'];
  href: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: ReactNode;
}

export type IButton = (props: IButtonProps) => React.ReactElement;

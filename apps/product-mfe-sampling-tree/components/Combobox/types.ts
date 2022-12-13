import { ReactElement } from 'react';

export interface IItem {
  id: number;
  label: string;
  value: string;
}

export interface IComboboxProps {
  items: Array<IItem>;
}

export type ICombobox = (props: IComboboxProps) => ReactElement;

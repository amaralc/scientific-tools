import { HTMLProps } from 'react';

export type IContainerProps = HTMLProps<HTMLDivElement>;
export type IContainer = (props: IContainerProps) => JSX.Element;

import clsx from 'clsx';
import { IContainer } from './types';

export const Container: IContainer = ({ className, ...props }) => {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
};

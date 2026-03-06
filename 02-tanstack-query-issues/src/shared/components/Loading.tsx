import { cn } from '@utils/cn';
import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export type ILoadingProps = ComponentPropsWithoutRef<'span'> & PropsWithChildren;

const Loading = ({ className }: ILoadingProps) => {
  return <span className={cn('loading loading-spinner loading-md text-success', className)}></span>;
};

const LoadingFullPage = () => {
  return (
    <div className="w-dvw h-dvh grid place-items-center">
      <Loading />
    </div>
  );
};

Loading.FullPage = LoadingFullPage;

export { Loading };
